import { FilmType } from "../types/FilmType";

const IMAGE_URL = import.meta.env.VITE_IMG_URL;

import {
  FilmBody,
  FilmBodyFade,
  FilmDetailButton,
  FilmDetailsParagraph,
  FilmHeader,
  FilmTitle,
  FilmWrapper,
} from "../styles/FilmCard.style";
import { useNavigate } from "react-router-dom";

const FilmCard = ({
  ano_lancamento,
  filme_poster,
  id_filme,
  nm_filme,
  vl_filme,
}: FilmType) => {
  const navigate = useNavigate();
  return (
    <FilmWrapper>
      <FilmHeader>
        <FilmTitle>{nm_filme}</FilmTitle>
      </FilmHeader>
      <FilmBody image={`${IMAGE_URL}${filme_poster}`}>
        <FilmBodyFade>
          <FilmDetailsParagraph>
            Ano Lançamento: {ano_lancamento}
          </FilmDetailsParagraph>
          <FilmDetailsParagraph>
            Preço: {vl_filme?.toFixed(2)}
          </FilmDetailsParagraph>
          <FilmDetailButton
            value={id_filme ? id_filme : 0}
            onClick={() => navigate(`/film-details/${id_filme}`)}
          >
            Detalhes
          </FilmDetailButton>
        </FilmBodyFade>
      </FilmBody>
    </FilmWrapper>
  );
};

export default FilmCard;
