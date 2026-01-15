import axios from "axios";
import { config } from "../config/config.js"

const instance = axios.create({
  baseURL: `${config.BASE_URL}${config.API_VERSION}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;