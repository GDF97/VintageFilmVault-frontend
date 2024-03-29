import axios from "axios";
import { ClientType } from "../types/ClientType";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const clientAPI = () => {
  return {
    clientLogin: async (email: string, senha: string) => {
      const response = await api.post("login-cliente.php", { email, senha });
      return response.data;
    },
    clientRegister: async (clientInfos: ClientType) => {
      const response = await api.post("cadastrar-cliente.php", { clientInfos });
      return response.data;
    },
    clientLogOut: async () => {},
    clientValidation: async (id_cliente: number, cd_cliente: number) => {},
  };
};
