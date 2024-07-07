import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import useAuthContext from "@/contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
export default function AuthLayout() {
  const { user } = useAuthContext();
  // return user?<Outlet/>:<Navigate to={'/login'}/>

  return user ? (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  ) : (
    <Navigate to={"/login"} />
  );
}
