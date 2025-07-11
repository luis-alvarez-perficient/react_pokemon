import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeContext, themes } from "../shared/context/ThemeContext";
import AppRouter from "./router/AppRouter";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={themes.light}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
