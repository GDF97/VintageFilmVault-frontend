import { FilmType } from "../types/FilmType";
import "../styles/components/FilmTickets.scss";
/*

*/

const FilmTickets = ({
  id_filme,
  nm_filme,
  tipo_midia,
  vl_filme,
}: FilmType) => {
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
          <h3>{tipo_midia}</h3>
        </div>
        <hr />
        <div>
          <p>Valor</p>
          <h3>R${vl_filme}</h3>
        </div>
      </div>
      <div className="filme-buttons">
        <button value={id_filme ? id_filme : 0}>Excluir</button>
        <button value={id_filme ? id_filme : 0}>Editar</button>
      </div>
    </div>
  );
};

export default FilmTickets;
