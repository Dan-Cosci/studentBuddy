import instance from "./api.service.js";

const api = instance;

export const login = async (data) => {
  return api.post("/auth/login", data);
}

export const register = async (data) => {
  return api.post("/auth/register", data); 
}

export const logout = () => {
  localStorage.removeItem("user");
};
