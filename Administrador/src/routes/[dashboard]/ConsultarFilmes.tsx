import { useEffect, useState } from "react";
import "../../styles/routes/[dashboard]/ConsultarFilmes.scss";
import { FilmType } from "../../types/FilmType";
import { useDashboardAPI } from "../../hooks/dashboardAPI";
import FilmTickets from "../../components/FilmTickets";
import EditFilm from "../../components/EditFilm";

const ConsultarFilmes = () => {
  const api = useDashboardAPI();

  const [filmes, setFilmes] = useState<Array<FilmType> | null>(null);
  const [getFilmeToEdit, setFilmeToEdit] = useState(0);
  const [umFilme, setUmFilme] = useState<FilmType | null>(null!);
  const [modal, setModal] = useState<boolean>(false);

  const fnHandleFilmeToEdit = (id: number) => {
    setFilmeToEdit(id);
  };

  const fnHandleModal = () => {
    setModal(!modal);
  };

  const fetchFilmes = async () => {
    try {
      const data = await api.consultarFilmes();

      if (!data.message) {
        setFilmes(data);
      } else {
        setFilmes(null);
      }
    } catch (error) {
      console.error("Erro ao consultar filmes:", error);
    }
  };

  const fnFetchOneFilm = async (id_filme: number) => {
    try {
      const data = await api.consultarFilmePorId(id_filme);

      setUmFilme(data);
    } catch (error) {
      console.error(error);
    } finally {
      console.log(umFilme);
    }
  };

  useEffect(() => {
    fetchFilmes();
  }, []);

  useEffect(() => {
    fetchFilmes();
  }, [filmes]);

  useEffect(() => {
    if (getFilmeToEdit != 0) {
      fnFetchOneFilm(getFilmeToEdit);
    }
  }, [getFilmeToEdit]);

  return (
    <section className="consultar-filme-section">
      <div className="filmes-wrapper">
        {filmes &&
          filmes.map((filme) => (
            <FilmTickets
              key={filme.id_filme}
              {...filme}
              fnSetFilmeToEdit={fnHandleFilmeToEdit}
            />
          ))}
      </div>
      {umFilme && (
        <EditFilm
          setUmFilme={setUmFilme}
          setFilmeToEdit={setFilmeToEdit}
          {...umFilme}
        />
      )}
    </section>
  );
};

export default ConsultarFilmes;
