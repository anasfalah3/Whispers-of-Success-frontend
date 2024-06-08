import { axiosClient } from "@/api/axios";

const AdminApi = {
  getCsrfToken: async () => {
    return await axiosClient.get("/sanctum/csrf-cookie");
  },
  login: async (email, password) => {
    return await axiosClient.post("/login", { email, password });
  },
  getUser: async () => {
    return await axiosClient.get("/api/user");
  },
};

export default AdminApi;
