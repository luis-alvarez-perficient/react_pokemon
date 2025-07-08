import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Or 'react-query' for v3
import { BrowserRouter } from "react-router-dom";
const AppRouter = lazy(() => import("./src/app/router/routes.tsx"));
import { ThemeContext, themes } from "./src/shared/context/ThemeContext.tsx";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={themes.light}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeContext.Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
