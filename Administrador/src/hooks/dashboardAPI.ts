import axios from "axios";
import { FilmType } from "../types/FilmType";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const useDashboardAPI = () => {
  return {
    cadastrarFilme: async (
      filme_obj: FilmType,
      filme_poster_url: string,
      filme_poster_name: string
    ) => {
      const response = await api.post("/cadastrar-filme.php", {
        filme_obj,
        filme_poster_url,
        filme_poster_name,
      });
      return response.data;
    },
    consultarFilmes: async () => {},
    resgatarGeneros: async () => {
      const response = await api.get("/selecionar-categorias.php");
      return response.data;
    },
    consultarClientes: async () => {},
    aprovarClientes: async () => {},
  };
};
