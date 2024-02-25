import { useEffect, useState } from "react";
import "../../styles/routes/[dashboard]/ConsultarFilmes.scss";
import { FilmType } from "../../types/FilmType";
import { useDashboardAPI } from "../../hooks/dashboardAPI";
import FilmTickets from "../../components/FilmTickets";

const ConsultarFilmes = () => {
  const api = useDashboardAPI();

  const [filmes, setFilmes] = useState<Array<FilmType> | null>(null);

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

  useEffect(() => {
    fetchFilmes();
  }, []);

  useEffect(() => {
    fetchFilmes();
  }, [filmes]);

  return (
    <section className="consultar-filme-section">
      <div className="filmes-wrapper">
        {filmes &&
          filmes.map((filme) => (
            <FilmTickets key={filme.id_filme} {...filme} />
          ))}
      </div>
    </section>
  );
};

export default ConsultarFilmes;
