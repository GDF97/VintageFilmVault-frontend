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

  const logIn = async (login: string, password: string) => {
    return true;
  };

  const logOut = () => {};

  return (
    <AuthContext.Provider value={{ client, logIn, logOut, validateClient }}>
      {children}
    </AuthContext.Provider>
  );
};
