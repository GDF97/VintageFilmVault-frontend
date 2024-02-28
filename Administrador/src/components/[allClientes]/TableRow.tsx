import { useDashboardAPI } from "../../hooks/dashboardAPI";
import { ClientType } from "../../types/ClientType";

const TableRow = ({
  id_cliente,
  nm_cliente,
  nm_email,
  nm_endereco,
  status_film,
}: ClientType) => {
  const api = useDashboardAPI();
  const deletarCliente = async (id_cliente: number) => {
    try {
      const data = await api.deletarCliente(id_cliente);
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="table-row">
      <div className="table-cell">{nm_cliente}</div>
      <div className="table-cell">{nm_email}</div>
      <div className="table-cell">{nm_endereco}</div>
      <div className="table-cell">{status_film}</div>
      <div className="table-cell">
        <button
          value={id_cliente}
          className="excluir"
          onClick={(e) => deletarCliente(Number(e.currentTarget.value))}
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default TableRow;
