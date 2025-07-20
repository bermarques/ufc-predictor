import axios from "axios";
import { API_URL } from "../utils/env";

const defaultOptions = {
  headers: { "Content-Type": "application/json" },
  baseURL: `${API_URL}/api`,
};

const api = axios.create(defaultOptions);

export default api;
