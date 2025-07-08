import { UseFetch } from "../../hooks/hooks";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

function FetchDataUsersCustomHook() {
  const { data, loading, error, handleCancelRequest } = UseFetch<User[]>({
    url: "https://jsonplaceholder.typicode.com/users",
  });

  return (
    <div>
      <h2>Fetch Data Example</h2>
      <button
        onClick={handleCancelRequest}
        className="bg-red-500 text-white p-2 rounded"
      >
        Cancel Request
      </button>
      {error && <p>{error.message}</p>}
      {/* {error && <p className="text-red-500">Error: {error}</p>} */}
      {data?.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      {data && data.length === 0 && <p>No data found.</p>}
    </div>
  );
}

export default FetchDataUsersCustomHook;
