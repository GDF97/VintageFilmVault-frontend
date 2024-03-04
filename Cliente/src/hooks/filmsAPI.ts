import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const filmsAPI = () => {
  return {
    getAllCategories: async () => {
      const response = await api.get("/selecionar-categorias.php");
      return response.data;
    },
    getAllFilms: async () => {
      const response = await api.get("/selecionar-todos-os-filmes.php");
      return response.data;
    },
    getFilmsByCategory: async (category: string) => {
      const response = await api.get(
        `/selecionar-todos-os-filmes-por-categoria.php?categoria=${category}`
      );
      return response.data;
    },
    getSearchedFilm: async (name: string) => {},
    getFilmById: async (id_filme: number) => {
      const response = await api.get(
        `selecionar-filme-por-id.php?id_filme=${id_filme}`
      );
      return response.data;
    },
  };
};
