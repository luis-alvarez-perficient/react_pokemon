import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

function FetchDataUsers() {
  // const [data, setData] = useState<{ id: number; name: string; email: string; phone: string; website: string }[] | null>(null);
  const [data, setData] = useState<User[]>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log("Data fetched:", data);

  return (
    <div>
      <h2>Fetch Data Example</h2>
      {data?.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      ))}
      {!data && <p>Loading...</p>}
      {data && data.length === 0 && <p>No data found.</p>}
    </div>
  );
}

export default FetchDataUsers;
