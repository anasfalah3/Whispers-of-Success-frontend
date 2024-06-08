import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useUserContext } from "@/context/UserContext";
import { useEffect } from "react";

export default function GuestLayout() {
  const navigate = useNavigate();
  const context = useUserContext();

  useEffect(() => {
    if (context.isAuthenticated) {
      navigate("/admin/dashboard");
    }
  }, []);

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
