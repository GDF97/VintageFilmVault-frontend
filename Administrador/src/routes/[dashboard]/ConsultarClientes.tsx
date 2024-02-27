import TableHeader from "../../components/[allClientes]/TableHeader";
import TableRow from "../../components/[allClientes]/TableRow";
import "../../styles/routes/[dashboard]/ConsultarClientesPendentes.scss";
import { useDashboardAPI } from "../../hooks/dashboardAPI";
import { useEffect, useState } from "react";
import { ClientType } from "../../types/ClientType";

const ConsultarClientes = () => {
  const api = useDashboardAPI();

  const [clientes, setClientes] = useState<Array<ClientType> | null>(null);

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

  useEffect(() => {
    fetchClientesAprovados();
  }, []);

  return (
    <section className="consultar-clientes-section">
      <div className="table-wrapper">
        <TableHeader />
        {clientes &&
          clientes.map((cliente) => (
            <TableRow key={cliente.id_cliente} {...cliente} />
          ))}
      </div>
    </section>
  );
};

export default ConsultarClientes;
