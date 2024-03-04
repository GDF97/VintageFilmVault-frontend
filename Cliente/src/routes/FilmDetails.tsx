import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filmsAPI } from "../hooks/filmsAPI";
import { FilmType } from "../types/FilmType";
import styled from "styled-components";
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

const URL_IMG = import.meta.env.VITE_IMG_URL;

const FilmDetails = () => {
  const { id } = useParams();

  const api = filmsAPI();

  const [film, setFilm] = useState<FilmType | null>(null);

  const fetchFilm = async (id_filme: number) => {
    try {
      const data = await api.getFilmById(id_filme);
      if (!data.status) {
        setFilm(data[0]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log(film);
    }
  };

  useEffect(() => {
    fetchFilm(Number(id));
  }, [id]);

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
                  <input type="radio" name="Opcao" id="Digital" />
                  Digital
                </label>

                <label htmlFor="Fisica">
                  <input type="radio" name="Opcao" id="Fisica" />
                  Fisica
                </label>
              </>
            ) : (
              <label htmlFor={film?.tipo_midia}>
                <input
                  type="radio"
                  name={film?.tipo_midia}
                  id={film?.tipo_midia}
                />
                {film?.tipo_midia}
              </label>
            )}
          </RadioButtonWrapper>
          <ButtonAlugar>Alugar</ButtonAlugar>
        </FilmDetailsWrapper>
      </ContainerWrapper>
    </Container>
  );
};

export default FilmDetails;
