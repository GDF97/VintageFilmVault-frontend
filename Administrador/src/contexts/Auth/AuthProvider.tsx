import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { AdmType } from "../../types/AdmType";
import { loginAPI } from "../../hooks/loginAPI";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [adm, setAdm] = useState<AdmType | null>(null);
  const api = loginAPI();

  const signIn = async (login: string, senha: string) => {
    const data = await api.admLogin(login, senha);
    if (data.status == "ok") {
      setAdm(data.adm);
      localStorage.setItem("admCodigo", data.adm.codigo);
      localStorage.setItem("admNome", data.adm.nome);
      return true;
    }
    return false;
  };

  const logOut = () => {
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ adm, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
