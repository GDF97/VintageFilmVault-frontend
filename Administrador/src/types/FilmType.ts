export type FilmType = {
  id_filme?: number;
  nm_filme: string;
  ano_lancamento?: number;
  vl_filme?: number;
  desc_filme?: string;
  tipo_midia?: string;
  categorias?: Array<number> | null;
};
