import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function GuestLayout() {
  return (
    <>
      <Header />
      <main className=" container mx-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
