import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import ForgotPassword from './features/auth/ForgotPassword';
import NotFound from "./pages/NotFound";
import Layout from "./layouts/Layout";
import AdminDashboard from "@/features/admin/AdminDashboard";
import AdminLayout from "@/layouts/admin/AdminLayout";
import AuthLayout from "@/layouts/auth/AuthLayout";
import GuestLayout from "@/layouts/guest/GuestLayout";
import Podcast from "./pages/Podcast";

export default function RoutesList() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:id" element={<Podcast />} />
      </Route>
      <Route element={<GuestLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}
