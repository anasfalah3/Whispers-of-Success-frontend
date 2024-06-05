import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";

function App() {
  return (
    <>
    <RouterProvider router={router}/>
      {/* <Header />
      <Home />
      <Footer /> */}
    </>
  );
}

export default App;
