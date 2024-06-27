import { ThemeProvider } from "@/components/theme-provider";

import RoutesList from "./routes.jsx";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RoutesList />
      </ThemeProvider>
    </>
  );
}

export default App;
