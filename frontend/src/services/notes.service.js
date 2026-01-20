import instance from "./api.service.js";

const api = instance;
const user = localStorage.getItem('user');
if (user) {
  const parsedUser = JSON.parse(user);
  api.defaults.headers.common['Authorization'] = `Bearer ${parsedUser.token}`;
}

api.defaults.withCredentials= true
api.defaults.headers.common['Content-Type'] = 'application/json';
api.defaults.headers.common['Accept'] = 'application/json';

export const getData = async () => {
  return await api.get('/notes/all');
}