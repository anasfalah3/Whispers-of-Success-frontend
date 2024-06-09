import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useUserContext } from "@/context/UserContext";
import { useEffect, useState } from "react";

export default function GuestLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const context = useUserContext();

  useEffect(() => {
    if (context.isAuthenticated) {
      setIsLoading(true);
      navigate("/admin/dashboard");
    } else {
      setIsLoading(false);
    }
  }, []);
  if (isLoading) {
    return <></>;
  }
  return (
    <>
      <Header />
      <main className=" container px-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
