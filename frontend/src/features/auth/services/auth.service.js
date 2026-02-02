import instance from "../../../config/api.js";

const api = instance;

export const login = async (data) => {
  return api.post("/auth/login", data);
}

export const register = async (data) => {
  return api.post("/auth/register", data); 
}

export const logout = async () => {
  localStorage.removeItem("auth-storage");
  return await api.post("/auth/logout");
};

export const checkAuth = async () => {
  return api.get("/auth/me");
}


