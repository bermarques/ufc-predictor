import api from "../api";

export const getFights = () => {
  return api.get("/fights");
};
