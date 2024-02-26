import { useDashboardAPI } from "../../hooks/dashboardAPI";
import { ClientType } from "../../types/ClientType";

const TableRow = ({
  id_cliente,
  nm_cliente,
  nm_email,
  nm_endereco,
}: ClientType) => {
  const api = useDashboardAPI();

  const aprovarCliente = async (id_cliente: number) => {
    try {
      const data = await api.aprovarOuRecusarClientes(id_cliente, "Aprovado");
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  };
  const recusarCliente = async (id_cliente: number) => {
    try {
      const data = await api.aprovarOuRecusarClientes(id_cliente, "Recusado");
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
      <div className="table-cell">
        <button
          value={id_cliente}
          onClick={(e) => aprovarCliente(Number(e.currentTarget.value))}
        >
          Aprovar
        </button>
        <button
          value={id_cliente}
          onClick={(e) => recusarCliente(Number(e.currentTarget.value))}
        >
          Recusar
        </button>
      </div>
    </div>
  );
};

export default TableRow;
