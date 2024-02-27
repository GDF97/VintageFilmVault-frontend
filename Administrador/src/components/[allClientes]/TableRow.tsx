import { ClientType } from "../../types/ClientType";

const TableRow = ({
  id_cliente,
  nm_cliente,
  nm_email,
  nm_endereco,
  status_film,
}: ClientType) => {
  return (
    <div className="table-row">
      <div className="table-cell">{nm_cliente}</div>
      <div className="table-cell">{nm_email}</div>
      <div className="table-cell">{nm_endereco}</div>
      <div className="table-cell">{status_film}</div>
      <div className="table-cell">
        <button value={id_cliente} className="excluir">
          Excluir
        </button>
      </div>
    </div>
  );
};

export default TableRow;
