import { FormEvent, useEffect, useState } from "react";
import { FilmType } from "../types/FilmType";
import { useDashboardAPI } from "../hooks/dashboardAPI";

type ISetModalOpen = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditFilm = (
  { id_apoio }: { id_apoio: number },
  { setModalOpen }: ISetModalOpen
) => {
  const api = useDashboardAPI();

  const [filmObj, setFilmObj] = useState<FilmType>({
    id_filme: 0,
    nm_filme: "",
    ano_lancamento: 0,
    vl_filme: 0,
    tipo_midia: "",
    desc_filme: "",
  });

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFilmObj(() => ({
      ...filmObj,
      [name]: value,
    }));
  };

  const editarFilme = async (filmObj: FilmType, e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await api.editarFilme(filmObj);
      console.log(data.message);
      setModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const consultarFilmePorId = async (id_filme: number) => {
    try {
      const data = await api.consultarFilmePorId(id_filme);
      setFilmObj(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    consultarFilmePorId(id_apoio);
  }, []);

  return (
    <div>
      <form className="formEditar" onSubmit={(e) => editarFilme(filmObj, e)}>
        <input
          type="text"
          name="nm_filme"
          value={filmObj.nm_filme}
          onChange={(e) => handleInput(e)}
        />
        <input
          type="text"
          name="ano_lancamento"
          value={filmObj.ano_lancamento}
          onChange={(e) => handleInput(e)}
        />
        <input
          type="text"
          name="vl_filme"
          value={filmObj.vl_filme}
          onChange={(e) => handleInput(e)}
        />
        <input
          type="text"
          name="tipo_midia"
          value={filmObj.tipo_midia}
          onChange={(e) => handleInput(e)}
        />
        <textarea
          name="desc_filme"
          value={filmObj.desc_filme}
          onChange={(e) => handleInput(e)}
        />
        <button type="submit">Editar Filme</button>
        <button type="reset" onClick={() => setModalOpen(false)}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default EditFilm;
