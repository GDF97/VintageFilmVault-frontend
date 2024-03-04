import { createContext } from "react";
import { ClientType } from "../../types/ClientType";

export type AuthContextType = {
  client: ClientType | null;
  logIn: (login: string, password: string) => Promise<boolean>;
  logOut: () => void;
  validateClient: (id_client: number, cd_client: number) => Promise<boolean>;
};

export const AuthContext = createContext<AuthContextType>(null!);
