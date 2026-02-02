import instance from "../../../config/api.js";

const api = instance;

api.defaults.withCredentials= true
api.defaults.headers.common['Content-Type'] = 'application/json';
api.defaults.headers.common['Accept'] = 'application/json';

export const getData = async (id) => {
  return await api.get(`/notes/${id}`);
}