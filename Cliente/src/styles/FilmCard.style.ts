import styled from "styled-components";

interface IBgimage {
  image: string;
}

export const FilmWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FilmHeader = styled.div`
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  background-color: white;
  box-shadow: 4px 4px 0 0 var(--green-color), 8px 8px 0 0 var(--red-color);
  border: 2px solid var(--brown-color);
`;

export const FilmTitle = styled.h1`
  font-size: 18px;
  font-family: var(--primary-font);
  color: var(--brown-color);
`;

export const FilmBody = styled.div<IBgimage>`
  width: 100%;
  min-height: 375px;
  box-shadow: 4px 4px 0 0 var(--green-color), 8px 8px 0 0 var(--red-color);
  border: 2px solid var(--brown-color);
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-size: cover;
`;

export const FilmBodyFade = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.3449754901960784) 50%,
    rgba(251, 251, 251, 1) 100%
  );
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: end;
  padding: 1rem;
`;

export const FilmDetailsParagraph = styled.p`
  font-size: 16px;
  font-family: var(--primary-font);
`;

export const FilmDetailButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  font-family: var(--primary-font);
  background-color: var(--brown-color);
  border: none;
  color: white;
  cursor: pointer;
`;
