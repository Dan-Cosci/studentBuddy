import instance from "../../../config/api.js";

const api = instance;

export const getData = async (id) => {
  return await api.get(`/notes/${id}`);
}