import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "1rem",
        textAlign: "center",
        background: "white",
        color: "black",
        borderRadius: "1rem",
      }}
    >
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <button
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "red",
          fontSize: "1rem",
          fontWeight: "bold",
          color: "white",
          border: "none",
          borderRadius: "0.25rem",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`/pokemons`);
        }}
      >
        Back to Pokemon List
      </button>
    </div>
  );
};
