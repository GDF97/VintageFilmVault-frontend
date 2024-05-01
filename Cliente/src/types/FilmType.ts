export interface FilmType {
  id_filme?: number;
  nm_filme: string;
  ano_lancamento?: number;
  vl_filme?: number;
  dsc_filme?: string;
  tipo_midia?: string;
  filme_poster?: string;
}

export interface FilmTypeAlugado extends FilmType {
  id_filme_alugado?: number;
}
