import { createContext } from "react";
import { FilmType } from "../../types/FilmType";

export type CartContextType = {
  filmsArray: Array<FilmType> | null;
  qntdFilmes: number;
  valor: number;
  addFilm: (film: FilmType) => Promise<void>;
  removeFilm: (idFilm: number) => Promise<void>;
  zerarArrayDeFilmes: () => void;
};

export const CartContext = createContext<CartContextType>(null!);
