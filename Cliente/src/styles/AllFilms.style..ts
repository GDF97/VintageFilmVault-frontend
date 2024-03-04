import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: var(--bg-color);
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-family: var(--primary-font);
  text-align: center;
  color: var(--brown-color);
`;

export const OtherWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  width: 275px;
  padding: 0.5rem;
  background-color: white;
  border: none;
  outline: none;
  font-size: 18px;
  font-family: var(--primary-font);
  border-radius: 5px;

  &::placeholder {
    font-size: 16px;
  }
`;

export const FilmGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem;
`;
