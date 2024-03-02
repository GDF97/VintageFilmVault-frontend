import { FilmType } from "../types/FilmType";
import "../styles/components/FilmTickets.scss";
import { useDashboardAPI } from "../hooks/dashboardAPI";

type ISetFilmeToEdit = {
  fnSetFilmeToEdit: (id: number) => void;
};

const FilmTickets = ({
  id_filme,
  nm_filme,
  tipo_midia,
  vl_filme,
  fnSetFilmeToEdit,
}: FilmType & ISetFilmeToEdit) => {
  const api = useDashboardAPI();

  const fnDeleteFilm = async (id: number) => {
    try {
      const data = await api.deletarFilmes(id);
      console.log(data);
    } catch (erro) {
      console.error(erro);
    }
  };

  return (
    <div className="filme">
      <div className="filme-body">
        <div>
          <p>Nome do Filme</p>
          <h3>{nm_filme}</h3>
        </div>
        <hr />
        <div>
          <p>Tipo de Midia</p>
          <h3>{tipo_midia == "Ambos" ? "Digital & Midia" : tipo_midia}</h3>
        </div>
        <hr />
        <div>
          <p>Valor</p>
          <h3>R${vl_filme?.toFixed(2)}</h3>
        </div>
      </div>
      <div className="filme-buttons">
        <button
          value={id_filme ? id_filme : 0}
          onClick={(e) => fnSetFilmeToEdit(Number(e.currentTarget.value))}
        >
          Editar
        </button>
        <button
          value={id_filme ? id_filme : 0}
          onClick={(e) => fnDeleteFilm(Number(e.currentTarget.value))}
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default FilmTickets;
