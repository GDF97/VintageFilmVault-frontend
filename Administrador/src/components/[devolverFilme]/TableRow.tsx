import { useDashboardAPI } from "../../hooks/dashboardAPI";

const TableRow = ({
  id_cliente,
  id_filme_alugado,
  nm_cliente,
  nm_email,
  nm_filme,
}: any) => {
  const api = useDashboardAPI();
  const devolverFilme = async (
    id_cliente: number,
    id_filme_alugado: number
  ) => {
    const data = await api.devolverFilme(id_filme_alugado, id_cliente);
    console.log(data);
  };

  return (
    <div className="table-row-diff">
      <div className="table-cell">{nm_cliente}</div>
      <div className="table-cell">{nm_email}</div>
      <div className="table-cell">{nm_filme}</div>
      <div className="table-cell">
        <button
          className="aprovar"
          onClick={() => devolverFilme(id_cliente, id_filme_alugado)}
        >
          Devolver Filme
        </button>
      </div>
    </div>
  );
};

export default TableRow;
