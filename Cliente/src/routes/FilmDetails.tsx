import { FormEvent, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filmsAPI } from "../hooks/filmsAPI";
import { FilmType } from "../types/FilmType";
import {
  ButtonAlugar,
  Container,
  ContainerWrapper,
  DetailContent,
  DetailWrapper,
  FilmDetailTitle,
  FilmDetailsWrapper,
  Poster,
  RadioButtonWrapper,
} from "../styles/FilmDetails.style";
import { CartContext } from "../contexts/CartContext/CartContext";

const URL_IMG = import.meta.env.VITE_IMG_URL;

const FilmDetails = () => {
  const { addFilm } = useContext(CartContext);
  const { id } = useParams();

  const api = filmsAPI();

  const [film, setFilm] = useState<FilmType | null>(null);
  const [midia, setMidia] = useState("");

  const fetchFilm = async (id_filme: number) => {
    try {
      const data = await api.getFilmById(id_filme);
      if (!data.status) {
        setFilm(data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleMidia = (midia: string) => {
    setMidia(midia);
  };

  useEffect(() => {
    fetchFilm(Number(id));
  }, [id]);

  const alugarFilme = () => {
    const client = localStorage.getItem("cliente");
    if (client) {
      if (film && midia != "") {
        const newFilmObj: FilmType = {
          id_filme: film.id_filme,
          nm_filme: film.nm_filme,
          vl_filme: film.vl_filme,
          tipo_midia: midia,
        };
        addFilm(newFilmObj);
      } else {
        alert("Tipo de Midia não foi escolhida");
      }
    } else {
      alert("Você não esta logado!");
    }
  };

  return (
    <Container>
      <ContainerWrapper>
        <Poster src={`${URL_IMG}${film?.filme_poster}`} />
        <FilmDetailsWrapper>
          <DetailWrapper>
            <FilmDetailTitle>Nome</FilmDetailTitle>
            <DetailContent>{film?.nm_filme}</DetailContent>
          </DetailWrapper>
          <DetailWrapper>
            <FilmDetailTitle>Ano de Lançamento</FilmDetailTitle>
            <DetailContent>{film?.ano_lancamento}</DetailContent>
          </DetailWrapper>
          <DetailWrapper>
            <FilmDetailTitle>Descrição</FilmDetailTitle>
            <DetailContent>{film?.dsc_filme}</DetailContent>
          </DetailWrapper>
          <FilmDetailTitle>
            Preço: R${film?.vl_filme?.toFixed(2)}
          </FilmDetailTitle>
          <RadioButtonWrapper>
            {film?.tipo_midia == "Ambos" ? (
              <>
                <label htmlFor="Digital">
                  <input
                    type="radio"
                    name="Opcao"
                    id="Digital"
                    value={"Digital"}
                    onChange={(e) => handleMidia(e.currentTarget.value)}
                  />
                  Digital
                </label>

                <label htmlFor="Fisica">
                  <input
                    type="radio"
                    name="Opcao"
                    id="Fisica"
                    value={"Física"}
                    onChange={(e) => handleMidia(e.currentTarget.value)}
                  />
                  Fisica
                </label>
              </>
            ) : (
              <label htmlFor={film?.tipo_midia}>
                <input
                  type="radio"
                  name={film?.tipo_midia}
                  id={film?.tipo_midia}
                  value={film?.tipo_midia}
                  onChange={(e) => handleMidia(e.currentTarget.value)}
                />
                {film?.tipo_midia}
              </label>
            )}
          </RadioButtonWrapper>
          <ButtonAlugar onClick={alugarFilme}>Alugar</ButtonAlugar>
        </FilmDetailsWrapper>
      </ContainerWrapper>
    </Container>
  );
};

export default FilmDetails;
