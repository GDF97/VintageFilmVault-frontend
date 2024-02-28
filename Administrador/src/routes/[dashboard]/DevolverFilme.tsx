import { useEffect, useState } from "react";
import { useDashboardAPI } from "../../hooks/dashboardAPI";
import TableHeader from "../../components/[devolverFilme]/TableHeader";
import "../../styles/components/TableRowDiff.scss";
import TableRow from "../../components/[devolverFilme]/TableRow";

const DevolverFilme = () => {
  const api = useDashboardAPI();

  const [filmesAlugados, setFilmesAlugados] = useState<Array<any> | null>(null);

  const fetchFilmesAlugados = async () => {
    try {
      const data = await api.consultarFilmesAlugado();
      if (!data.message) {
        setFilmesAlugados(data);
      } else {
        setFilmesAlugados(null);
        console.log(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFilmesAlugados();
  }, []);

  useEffect(() => {
    fetchFilmesAlugados();
  }, [filmesAlugados]);

  return (
    <section className="consultar-clientes-section">
      <div className="table-wrapper">
        <TableHeader />
        {filmesAlugados ? (
          filmesAlugados.map((filme) => (
            <TableRow key={filme.id_filme_alugado} {...filme} />
          ))
        ) : (
          <p>Não há filme alugado</p>
        )}
      </div>
    </section>
  );
};

export default DevolverFilme;
