import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const loginAPI = () => {
  return {
    admLogin: async (login: string, senha: string) => {
      const response = await api.post("/login.php", { login, senha });
      return response.data;
    },
  };
};
