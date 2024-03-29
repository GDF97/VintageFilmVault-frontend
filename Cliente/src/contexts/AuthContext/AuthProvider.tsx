import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { ClientType } from "../../types/ClientType";
import { clientAPI } from "../../hooks/clientAPI";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const api = clientAPI();

  const [client, setClient] = useState<ClientType | null>(null);

  const validateClient = async (id_client: number, cd_client: number) => {
    return true;
  };

  const loginCliente = async (email: string, senha: string) => {
    const data = await api.clientLogin(email, senha);
    if (data.status == "success") {
      const clientObj: ClientType = {
        id_cliente: data.cliente.codigo,
        nm_cliente: data.nome,
        nm_email: data.email,
      };
      setClient(clientObj);
      localStorage.setItem("id_cliente", data.cliente.codigo);
      return true;
    }
    return false;
  };

  const logOut = () => {
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{ client, loginCliente, logOut, validateClient }}
    >
      {children}
    </AuthContext.Provider>
  );
};
