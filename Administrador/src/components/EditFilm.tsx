import { FormEvent, useEffect, useState } from "react";
import { FilmType } from "../types/FilmType";
import { useDashboardAPI } from "../hooks/dashboardAPI";
import "../styles/components/EditFilme.scss";

type SetFilmeType = {
  setUmFilme: React.Dispatch<React.SetStateAction<FilmType | null>>;
  setFilmeToEdit: React.Dispatch<React.SetStateAction<number>>;
};

const EditFilm = ({
  id_filme,
  nm_filme,
  ano_lancamento,
  vl_filme,
  tipo_midia,
  desc_filme,
  setUmFilme,
  setFilmeToEdit,
}: FilmType & SetFilmeType) => {
  const api = useDashboardAPI();

  const [filmObj, setFilmObj] = useState<FilmType>({
    id_filme: id_filme,
    nm_filme: nm_filme,
    ano_lancamento: ano_lancamento,
    vl_filme: vl_filme,
    tipo_midia: tipo_midia,
    desc_filme: desc_filme,
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

  const editarFilme = async (e: FormEvent) => {
    e.preventDefault();
    console.log(filmObj);
    try {
      const data = await api.editarFilme(filmObj);
      console.log(data.message);
    } catch (error) {
      console.error(error);
    } finally {
      setUmFilme(null);
      setFilmeToEdit(0);
    }
  };

  useEffect(() => {
    console.log(desc_filme);
  }, []);

  return (
    <div className="editFilm">
      <form className="formEditar" onSubmit={editarFilme}>
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
        <button
          type="reset"
          onClick={() => {
            setUmFilme(null);
            setFilmeToEdit(0);
          }}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default EditFilm;
