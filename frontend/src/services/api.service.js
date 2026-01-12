import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5500/api/v1",
  withCredentials: true,
});

export default instance;