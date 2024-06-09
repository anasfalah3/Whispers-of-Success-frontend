import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import UserContext from "./context/UserContext.jsx";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <>
      <UserContext>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </UserContext>
    </>
  );
}

export default App;
