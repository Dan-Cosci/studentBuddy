import instance from "../../../config/api.js";

const api = instance;

export const getData = async (id) => {
  return await api.get(`/notes/${id}`);
}

export const deleteNote = async (id) => {
  return await api.delete(`/notes/${id}`);
}

export const updateNote = async (id, data) => {
  return await api.put(`/notes/${id}`, data);
}

export const addNote = async (id, data) => {
  return await api.post(`/notes/${id}`, data);
}
