import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 90.6vh;
  background-color: var(--bg-color);
  padding: 5rem;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Poster = styled.img`
  width: 375px;
  height: 500px;
  border: 3px solid var(--brown-color);
  object-fit: cover;
  object-position: center;
  box-shadow: 4px 4px 0 0 var(--green-color), 8px 8px 0 0 var(--red-color);
`;

export const FilmDetailsWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FilmDetailTitle = styled.p`
  color: var(--brown-color);
  font-family: var(--primary-font);
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailContent = styled.div`
  width: 100%;
  border: 2px solid var(--brown-color);
  padding: 0.5rem;
  background-color: white;
  font-family: var(--primary-font);
  box-shadow: 4px 4px 0 0 var(--green-color), 8px 8px 0 0 var(--red-color);
`;

export const ButtonAlugar = styled.button`
  padding: 0.5rem;
  color: white;
  background-color: var(--green-color);
  font-family: var(--primary-font);
  font-size: 18px;
  border: none;
  cursor: pointer;
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
