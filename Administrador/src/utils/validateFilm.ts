import { FilmType } from "../types/FilmType";

export type ValidationError = {
  [key: string]: string;
};

export const validateFilm = (filmObj: FilmType) => {
  const erros: ValidationError = {};

  if (!filmObj.nm_filme) {
    erros["nome"] = "Coloque um nome para o filme";
  }
  if (!filmObj.ano_lancamento) {
    erros["ano"] = "Coloque um ano de lançamento";
  }
  if (!filmObj.vl_filme || filmObj.vl_filme < 1) {
    erros["valor"] = "Coloque um valor válido(>1,00)";
  }
  if (!filmObj.categorias || filmObj.categorias.length == 0) {
    erros["categorias"] = "Selecione no minimo uma categoria";
  }
  if (!filmObj.desc_filme) {
    erros["desc"] = "Você não atribuiu uma descrição ao filme";
  }
  if (!filmObj.tipo_midia) {
    erros["midia"] = "Você não selecionou nenhum Tipo de Midia";
  }

  return erros;
};
