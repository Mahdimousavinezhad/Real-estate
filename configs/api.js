import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.response.use((res) => res.data);

export default api;
