import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.88.21:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refresh");

      if (refreshToken) {
        try {
          const res = await axios.post("/authentication/refresh/", {
            refresh: refreshToken,
          });

          const { access } = res.data;

          if (access) {
            localStorage.setItem("access", access);
            originalRequest.headers["Authorization"] = `Bearer ${access}`;
            return api(originalRequest);
          }
        } catch (refreshError) {
          console.error("Refresh token error:", refreshError);
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          window.location.href = "/login";
        }
      }
    }
    return Promise.reject(error);
  }
);
export default api;