import axios from "axios";
import { ClientType } from "../types/ClientType";
import { FilmType } from "../types/FilmType";

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
    clientLogOut: () => {
      localStorage.clear();
    },
    clientValidation: async (id_cliente: number, cd_cliente: number) => {},
    rentFilm: async (id_cliente: number, filmes: Array<FilmType>) => {
      const response = await api.post("alugar-filme-2.php", {
        id_cliente,
        filmes,
      });
      return response.data;
    },
    fetchRentedFilms: async (id_cliente: number) => {
      const response = await api.get(
        `selecionar-filmes-alugados.php?id_cliente=${id_cliente}`
      );
      return response.data;
    },
    returnRentedFilm: async (id_filme_alugado: number, id_cliente: number) => {
      const response = await api.post("/devolver-filme.php", {
        id_filme_alugado,
        id_cliente,
      });
      return response.data;
    },
  };
};
