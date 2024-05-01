import { ClientType } from "../types/ClientType";

type Error = {
  [key: string]: string;
};

export const validateInfos = (data: ClientType) => {
  const erros: Error = {};

  if (!data.nm_cliente) {
    erros["nm_cliente"] = "O nome é obrigatório!";
  }

  if (!data.cd_senha) {
    erros["cd_senha"] = "A senha é obrigatória!";
  }

  if (!data.nm_email) {
    erros["nm_email"] = "O email é obrigatório!";
  }

  if (!data.nm_endereco) {
    erros["nm_endereco"] = "O endereço é obrigatório!";
  }

  return erros;
};
