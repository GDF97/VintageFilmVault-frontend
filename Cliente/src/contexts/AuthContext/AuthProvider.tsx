import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { ClientType } from "../../types/ClientType";
import { clientAPI } from "../../hooks/clientAPI";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const api = clientAPI();

  const [client, setClient] = useState<ClientType | null>(null);

  const loginCliente = async (email: string, senha: string) => {
    const data = await api.clientLogin(email, senha);
    if (data.status == "success") {
      const clientObj: ClientType = {
        id_cliente: data.cliente.codigo,
        nm_cliente: data.cliente.nome,
        nm_email: data.cliente.email,
      };
      localStorage.setItem("cliente", JSON.stringify(clientObj));
      localStorage.setItem("id_cliente", data.cliente.codigo);

      return { isAuth: true, status: data.status, message: data.message };
    }
    return { isAuth: false, status: data.status, message: data.message };
  };

  const logOut = () => {
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ client, loginCliente, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
