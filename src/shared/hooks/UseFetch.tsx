import { useEffect, useState } from "react";

interface UseFetchProps {
  url: string;
  options?: RequestInit;
}

function UseFetch<T>({ url }: UseFetchProps) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [controller, setController] = useState<AbortController>();

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);

    // const loadResource = async () => {
    //   try {
    //     const response = await fetch(url, {
    //       signal: abortController.signal,
    //     });
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     setData(data);
    //   } catch (error) {
    //     if (error instanceof Error && error.name === "AbortError") {
    //       console.log("Fetch aborted");
    //     } else if (error instanceof Error) {
    //       setError(error);
    //     } else {
    //       setError(new Error("An unknown error occurred"));
    //     }
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // loadResource();

    fetch(url, {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError(Error("Request cancelled by user"));
      setLoading(false);
    }
  };

  return { data, loading, error, handleCancelRequest };
}

export default UseFetch;
