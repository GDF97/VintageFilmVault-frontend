import { createContext } from "react";
import { AdmType } from "../../types/AdmType";

export type AuthContextType = {
  adm: AdmType | null;
  signIn: (login: string, senha: string) => Promise<boolean>;
  logOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
