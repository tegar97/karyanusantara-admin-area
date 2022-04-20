import axios from "axios";


export default {
  login: (credentials) => axios.post("/auth/admin/login", credentials),
  details: (token) =>
    axios.get("/auth/admin/me", {
      headers: {
        Authorization: token,
      },
    }),
  refresh: (token) =>
    axios.get("/auth/admin/refresh", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
