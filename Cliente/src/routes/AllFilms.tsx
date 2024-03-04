import { useEffect, useState } from "react";
import CategoriesFilter from "../components/CategoriesFilter";
import FilmCard from "../components/FilmCard";
import {
  Container,
  FilmGrid,
  OtherWrapper,
  SearchInput,
  Title,
} from "../styles/AllFilms.style.";
import { filmsAPI } from "../hooks/filmsAPI";
import { FilmType } from "../types/FilmType";

const AllFilms = () => {
  const api = filmsAPI();

  const [category, setCategory] = useState("");
  const [allFilms, setAllFilms] = useState<Array<FilmType> | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const fetchAllFilms = async () => {
    setNotFound(false);
    try {
      const data = await api.getAllFilms();
      if (!data.status) {
        setAllFilms(data);
      } else {
        console.log(data.status);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFilmByCategory = async (category: string) => {
    setLoading(true);
    setNotFound(false);
    try {
      const data = await api.getFilmsByCategory(category);
      if (!data.status) {
        setAllFilms(data);
      } else {
        setAllFilms(null);
        setNotFound(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllFilms();
  }, []);

  useEffect(() => {
    setLoading(true);
    if (category != "") {
      fetchFilmByCategory(category);
    } else {
      fetchAllFilms();
    }
  }, [category]);

  return (
    <Container>
      <Title>Todos os Filmes</Title>
      <OtherWrapper>
        <SearchInput
          type="text"
          placeholder="Procurando por algo especifico?"
        />
        <CategoriesFilter fnSetCategory={setCategory} />
      </OtherWrapper>
      <FilmGrid>
        {loading ? (
          <p> Carregando </p>
        ) : (
          <>
            {allFilms &&
              allFilms.map((film) => (
                <FilmCard key={film.id_filme} {...film} />
              ))}
          </>
        )}
        {notFound && <p>Não há filmes com essa categoria</p>}
      </FilmGrid>
    </Container>
  );
};

export default AllFilms;
