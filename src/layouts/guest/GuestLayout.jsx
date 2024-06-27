import useAuthContext from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function GuestLayout() {
  const { user } = useAuthContext();

  return !user ? (
    <>
      <Header />
      <main className="container px-20 py-5">
        <Outlet />
      </main>
      <Footer />
    </>
  ) : (
    <Navigate to={"/login"} />
  );
}
