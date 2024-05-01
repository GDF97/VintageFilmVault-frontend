import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext/CartContext";

import styled from "styled-components";
import { clientAPI } from "../hooks/clientAPI";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { FilmType, FilmTypeAlugado } from "../types/FilmType";

const Container = styled.div`
  padding: 2.5rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: var(--bg-color);
`;

const Content = styled.div`
  width: 1150px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CartItemsWrapper = styled.div`
  width: 1150px;
  height: 600px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid var(--brown-color);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  &:last-child {
    justify-content: space-between;
  }
`;

const ButtonAlugar = styled.button`
  width: 175px;
  padding: 0.75rem;
  border: none;
  font-size: 16px;
  background-color: var(--green-color);
  color: white;
  font-family: var(--primary-font);
  letter-spacing: 0.25rem;
  cursor: pointer;
`;

const TotalPrice = styled.p`
  font-size: 24px;
  font-family: var(--primary-font);
  color: var(--brown-color);
`;

const CartItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--bg-color);
  justify-content: space-between;
  border: 1px solid var(--brown-color);
  font-family: var(--primary-font);
`;

const CartItemValues = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const ButtonCancelar = styled.button`
  flex-grow: 1;
  padding: 0.5rem;
  border: none;
  border-left: 1px solid var(--brown-color);
  background-color: var(--red-color);
  color: white;
  font-family: var(--primary-font);
  font-size: 16px;
  cursor: pointer;
`;

const OthersButton = styled.button``;

const CartDetails = () => {
  const { filmsArray, valor, removeFilm, zerarArrayDeFilmes } =
    useContext(CartContext);
  const useClientApi = clientAPI();

  const [filmesAlugados, setFilmesAlugados] = useState(false);

  const [arrayDeFilmesAlugados, setArrayDeFilmesAlugados] =
    useState<Array<FilmTypeAlugado> | null>(null);

  const fetchFilmesAlugados = async (id_cliente: number) => {
    const data = await useClientApi.fetchRentedFilms(id_cliente);
    if (data.status == "warning") {
      return;
    }

    setArrayDeFilmesAlugados(data);
  };

  useEffect(() => {
    if (filmesAlugados) {
      let idCliente = localStorage.getItem("id_cliente");
      fetchFilmesAlugados(Number(idCliente));
    }
  }, [filmesAlugados]);

  const alugarFilme = async () => {
    let idCliente = Number(localStorage.getItem("id_cliente"));

    console.log(filmsArray?.length);
    if (filmsArray?.length != 0 && filmsArray != null) {
      console.log("Alugando");
      const data = await useClientApi.rentFilm(idCliente, filmsArray);
      if (data.status == "ok") {
        console.log("Alugou");
        alert("Filmes Alugados com Sucesso!");
        zerarArrayDeFilmes();
      } else {
        console.log(data);
      }
    }
  };

  const devolverFilme = async (id_filme_alugado: number) => {
    let idCliente = Number(localStorage.getItem("id_cliente"));
    try {
      const data = await useClientApi.returnRentedFilm(
        id_filme_alugado,
        idCliente
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      fetchFilmesAlugados(idCliente);
    }
  };

  return (
    <Container>
      <Content>
        <Wrapper>
          <OthersButton onClick={() => setFilmesAlugados(false)}>
            Filmes para Alugar
          </OthersButton>
          <OthersButton onClick={() => setFilmesAlugados(true)}>
            Filmes Alugados
          </OthersButton>
        </Wrapper>
        <CartItemsWrapper>
          {!filmesAlugados ? (
            <React.Fragment>
              {filmsArray?.length != 0 && filmesAlugados != null ? (
                filmsArray?.map((film, index) => (
                  <CartItem key={index}>
                    <CartItemValues>{film.nm_filme}</CartItemValues>
                    <CartItemValues>{film.vl_filme}</CartItemValues>
                    <CartItemValues>{film.tipo_midia}</CartItemValues>
                    <ButtonCancelar
                      onClick={() => removeFilm(Number(film.id_filme))}
                    >
                      Cancelar
                    </ButtonCancelar>
                  </CartItem>
                ))
              ) : (
                <p>Nenhum filme para alugar!</p>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {arrayDeFilmesAlugados?.length != 0 &&
              arrayDeFilmesAlugados != null ? (
                arrayDeFilmesAlugados?.map((film, index) => (
                  <CartItem key={index}>
                    <CartItemValues>{film.nm_filme}</CartItemValues>
                    <CartItemValues>{film.vl_filme}</CartItemValues>
                    <CartItemValues>{film.tipo_midia}</CartItemValues>
                    <ButtonAlugar
                      onClick={() =>
                        devolverFilme(Number(film.id_filme_alugado))
                      }
                    >
                      Devolver
                    </ButtonAlugar>
                  </CartItem>
                ))
              ) : (
                <p>Nenhum filme alugado!</p>
              )}
            </React.Fragment>
          )}
        </CartItemsWrapper>

        <Wrapper>
          {!filmesAlugados && (
            <React.Fragment>
              <TotalPrice>
                Valor Final: R${valor == 0 ? "00,00" : `${valor}`}
              </TotalPrice>
              <ButtonAlugar onClick={alugarFilme}>Alugar</ButtonAlugar>
            </React.Fragment>
          )}
        </Wrapper>
      </Content>
    </Container>
  );
};

export default CartDetails;
