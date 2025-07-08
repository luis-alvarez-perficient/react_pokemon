interface UseFetchProps {
  url: string;
  options?: RequestInit;
}

// function getSuspender<T>(promise: Promise<T>) {
//   let status = "pending";
//   let result: T | Error;
//   const suspender = promise
//     .then((res) => {
//       status = "success";
//       result = res;
//     },
//     (error) => {
//       status = "error";
//       result = error;
//     }
//   );
//   return {
//     read: () => {
//       if (status === "pending") {
//         throw suspender;
//       } else if (status === "error") {
//         throw result as Error;
//       } else if (status === "success") {
//         return result as T;
//       }
//     },
//   };
//   };

function getSuspender<T>(promise: Promise<T>) {
  let status = "pending";
  let result: T | Error;
  const suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw result as Error;
      case "success":
        return result as T;
      default:
        throw new Error("Unknown status: " + status);
    }

    // if (status === "pending") {
    //   throw suspender;
    // } else if (status === "error") {
    //   throw result as Error;
    // } else if (status === "success") {
    //   return result as T;
    // }
  };
  return { read };
  // return {
  //   read: () => {
  //     if (status === "pending") {
  //       throw suspender;
  //     } else if (status === "error") {
  //       throw result as Error;
  //     } else if (status === "success") {
  //       return result as T;
  //     }
  //   },
  // };
}

function UseFetchSuspense<T>({ url }: UseFetchProps) {
  const promise = fetch(url)
    .then((response) => response.json())
    .then((data) => data as T);

  return getSuspender<T>(promise);
}
//   const [data, setData] = useState<T>();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<Error>();
//   const [controller, setController] = useState<AbortController>();

//   useEffect(() => {
//     const abortController = new AbortController();
//     setController(abortController);
//     fetch(url, {
//       signal: abortController.signal,
//     })
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => {
//         if (error.name === "AbortError") {
//           console.log("Fetch aborted");
//         } else {
//           setError(error);
//         }
//       })
//       .finally(() => {
//         setLoading(false);
//       });

//     return () => {
//       abortController.abort();
//     };
//   }, [url]);

//   const handleCancelRequest = () => {
//     if (controller) {
//       controller.abort();
//       setError(Error("Request cancelled by user"));
//       setLoading(false);
//     }
//   };

//   return { data, loading, error, handleCancelRequest };
// }

export default UseFetchSuspense;
