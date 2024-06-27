import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound from "./pages/NotFound";
import Layout from "./layouts/Layout";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminLayout from "@/layouts/admin/AdminLayout";
import AuthLayout from "@/layouts/auth/AuthLayout";
import GuestLayout from "@/layouts/guest/GuestLayout";

export default function RoutesList() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<GuestLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}
