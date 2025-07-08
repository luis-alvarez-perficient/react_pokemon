import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./EmptyCard.css";

export const EmptyCard = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className="container"
      style={{ background: theme.background, color: theme.color }}
    >
      <p>No hay datos para mostrar.</p>
    </div>
  );
};
