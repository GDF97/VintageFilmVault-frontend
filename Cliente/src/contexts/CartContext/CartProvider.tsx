import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { FilmType } from "../../types/FilmType";

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [filmsArray, setFilmsArray] = useState<Array<FilmType> | null>(null);
  const [qntdFilmes, setQntdFilmes] = useState<number>(0);
  const [valor, setValor] = useState<number>(0);

  const addFilm = async (film: FilmType) => {
    console.log("Adicionou filme");
    let filmeDuplicado = false;
    filmsArray?.forEach((filmArr) => {
      if (filmArr.id_filme == film.id_filme) {
        filmeDuplicado = true;
        return false;
      }
    });

    if (filmeDuplicado) {
      return;
    }
    setFilmsArray((prev) => [...(prev || []), film]);
  };

  useEffect(() => {
    updateInfos();
  }, [filmsArray]);

  const removeFilm = async (idFilm: number) => {
    const newArray = filmsArray?.filter((film) => film.id_filme != idFilm);

    if (newArray) {
      setFilmsArray(newArray);
    } else {
      setFilmsArray(null);
    }
  };

  const updateInfos = () => {
    let newValor: number = 0;

    setQntdFilmes(filmsArray != null ? filmsArray.length : 0);
    if (filmsArray != null) {
      filmsArray?.map((film) => {
        newValor = newValor + Number(film.vl_filme ? film.vl_filme : 0);
      });
      setValor(newValor);
    }
  };

  const zerarArrayDeFilmes = () => {
    setFilmsArray(null);
    setValor(0);
  };

  return (
    <CartContext.Provider
      value={{
        filmsArray,
        qntdFilmes,
        valor,
        addFilm,
        removeFilm,
        zerarArrayDeFilmes,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
