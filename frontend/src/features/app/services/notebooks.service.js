import instance from "../../../config/api.js";

const api = instance;

export const getData = async (id) => {
  return await api.get(`/notebooks/${id}`);
}

export const deleteNotebook = async (id) => {
  return await api.delete(`/notebooks/${id}`);
}

export const updateNotebook = async (id, data) => {
  return await api.put(`/notebooks/${id}`, data);
}

export const addNotebook = async (id, data) => {
  return await api.post(`/notebooks/${id}`, data);
}