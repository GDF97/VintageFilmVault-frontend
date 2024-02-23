import { AdmType } from "../types/AdmType";

type Error = {
  [key: string]: string;
};

export const validateLogin = (LoginInfo: AdmType) => {
  const erros: Error = {};

  if (!LoginInfo.login) {
    erros["login"] = "O Usuário é obrigatório";
  }

  if (!LoginInfo.senha) {
    erros["senha"] = "A Senha é obrigatório";
  }

  return erros;
};
