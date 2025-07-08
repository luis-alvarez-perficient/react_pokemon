import { useQuery } from "@tanstack/react-query";
// import Layout from "../shared/ui/layout/main-layout/MainLayout22";
import { EmptyCard, ErrorCard, LoaderSpinner } from "../shared/ui/ui";
import { lazy } from "react";

const Layout = lazy(
  () => import("../shared/ui/layout/main-layout/MainLayout22")
);

// Define the User type
type User = {
  id: number;
  name: string;
  email: string;
};

export default function UsersPage() {
  const { data, error, isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
  });

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">Usuarios</h2>
      {isLoading && <LoaderSpinner />}
      {error && <ErrorCard message={error.message} />}
      {!isLoading && !error && (!data || data.length === 0) && <EmptyCard />}

      {!isLoading && data && (
        <div className="grid gap-4">
          {data.map((user) => (
            <div
              key={user.id}
              className="p-4 bg-white rounded shadow hover:shadow-md transition"
            >
              <p className="font-medium text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}
