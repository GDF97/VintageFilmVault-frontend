import TableHeader from "../../components/[waitingClients]/TableHeader";
import TableRow from "../../components/[waitingClients]/TableRow";
import "../../styles/routes/[dashboard]/ConsultarClientesPendentes.scss";
import "../../styles/components/[waitingClients]/TableRow.scss";
import { useDashboardAPI } from "../../hooks/dashboardAPI";
import { useEffect, useState } from "react";
import { ClientType } from "../../types/ClientType";

const ConsultarClientesPendentes = () => {
  const api = useDashboardAPI();

  const [clientes, setClientes] = useState<Array<ClientType> | null>(null);

  const fecthClientesPendentes = async () => {
    try {
      const data = await api.consultarClientesPendentes();

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
    fecthClientesPendentes();
  }, []);

  useEffect(() => {
    fecthClientesPendentes();
  }, [clientes]);

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

export default ConsultarClientesPendentes;
