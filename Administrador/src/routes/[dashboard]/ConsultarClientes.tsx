import TableHeader from "../../components/[allClientes]/TableHeader";
import TableRow from "../../components/[allClientes]/TableRow";
import "../../styles/routes/[dashboard]/ConsultarClientesPendentes.scss";
import { useDashboardAPI } from "../../hooks/dashboardAPI";
import { useEffect, useState } from "react";
import { ClientType } from "../../types/ClientType";

const ConsultarClientes = () => {
  const api = useDashboardAPI();

  const [clientes, setClientes] = useState<Array<ClientType> | null>(null);
  const [filterdClientes, setFilteredClientes] = useState<Array<ClientType>>();
  const [apenasClientesQueAlugaram, setEsseEstadoTodo] = useState(false);

  const fetchClientesAprovados = async () => {
    try {
      const data = await api.consultarClientes();
      if (!data.message) {
        setClientes(data);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFilteredClientes = () => {
    const newClientesArray = clientes?.filter(
      (cliente) => cliente.status_film === "Alugou"
    );
    setFilteredClientes(newClientesArray);
  };

  useEffect(() => {
    fetchClientesAprovados();
  }, []);

  useEffect(() => {
    fetchClientesAprovados();
  }, [clientes]);

  useEffect(() => {
    fetchFilteredClientes();
  }, [apenasClientesQueAlugaram]);

  return (
    <section className="consultar-clientes-section">
      <div className="table-wrapper">
        <TableHeader />
        {apenasClientesQueAlugaram
          ? filterdClientes?.map((cliente) => (
              <TableRow key={cliente.id_cliente} {...cliente} />
            ))
          : clientes &&
            clientes.map((cliente) => (
              <TableRow key={cliente.id_cliente} {...cliente} />
            ))}
      </div>
      <button
        onClick={() => setEsseEstadoTodo(!apenasClientesQueAlugaram)}
        className="btnClientesAlugaram"
      >
        {" "}
        {!apenasClientesQueAlugaram
          ? "Apenas Clientes que alugaram filmes"
          : "Todos os clientes"}
      </button>
    </section>
  );
};

export default ConsultarClientes;
