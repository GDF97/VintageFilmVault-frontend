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
    consultarFilmes: async () => {
      const response = await api.get("/selecionar-filmes.php");
      return response.data;
    },
    consultarFilmesPeloNome: async (nome: string) => {
      const response = await api.get(
        `/selecionar-filmes-pelo-nome?nome=${nome}`
      );
      return response.data;
    },
    consultarFilmesAlugado: async () => {
      const response = await api.get("/clientes-que-alugaram-filme.php");
      return response.data;
    },
    resgatarGeneros: async () => {
      const response = await api.get("/selecionar-categorias.php");
      return response.data;
    },
    consultarClientes: async () => {
      const response = await api.get("/selecionar-clientes.php");
      return response.data;
    },
    consultarClientesPendentes: async () => {
      const response = await api.get("/selecionar-clientes-pendentes.php");
      return response.data;
    },
    consultarClientesPeloNome: async (nome: string) => {
      const response = await api.get(
        `/selecionar-clientes-pelo-nome.php?nome=${nome}`
      );
      return response.data;
    },
    aprovarOuRecusarClientes: async (id_cliente: number, status: string) => {
      const response = await api.patch("/status-cadastro-clientes.php", {
        id_cliente,
        status,
      });
      return response.data;
    },
    deletarFilmes: async (id_filme: number) => {
      const response = await api.delete(
        `/deletar-filme.php?id_filme=${id_filme}`
      );
      return response.data;
    },
    devolverFilme: async (id_cliente: number, id_filme_alugado: number) => {
      const response = await api.post("/devolver-filme.php", {
        id_filme_alugado,
        id_cliente,
      });
      return response.data;
    },
  };
};
