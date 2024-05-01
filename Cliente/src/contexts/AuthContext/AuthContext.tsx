import { createContext } from "react";
import { ClientType } from "../../types/ClientType";

type loginClienteType = {
  isAuth: boolean;
  message: string;
  status: string;
};

export type AuthContextType = {
  client: ClientType | null;
  loginCliente: (email: string, senha: string) => Promise<loginClienteType>;
  logOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
