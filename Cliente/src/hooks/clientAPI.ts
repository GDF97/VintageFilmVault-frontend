import axios from "axios";
import { ClientType } from "../types/ClientType";

const api = axios.create({
  baseURL: "",
});

export const clientAPI = () => {
  return {
    clientLogin: async (login: string, password: string) => {},
    clientRegister: async (clientInfos: ClientType) => {},
    clientLogOut: async () => {},
    clientValidation: async (id_cliente: number, cd_cliente: number) => {},
  };
};
