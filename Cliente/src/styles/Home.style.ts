import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LandingPage = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #00000076;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const PosterDiv = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

export const PosterLandingPage = styled.img`
  width: 50%;
  object-fit: cover;
  object-position: center;
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: white;
  font-family: var(--secondary-font);
`;

export const SubTitle = styled(Title)`
  font-size: 2.75rem;
  color: var(--brown-color);
`;

export const DescLP = styled.p`
  width: 700px;
  text-align: center;
  font-size: 1.75rem;
  font-family: var(--primary-font);
  color: white;
`;

export const ButtonKnow = styled.a`
  width: 250px;
  border: 2px solid var(--brown-color);
  padding: 0.75rem;
  font-size: 1.25rem;
  background-color: var(--yellow-color);
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-family: var(--primary-font);
  color: var(--brown-color);
`;

export const DescriptionPage = styled.div`
  width: 100%;
  padding: 1.5rem 2.5rem;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
`;

export const Description = styled.div`
  width: 575px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const DescriptionParagraph = styled.p`
  width: 100%;
  font-size: 1.25rem;
  color: var(--brown-color);
  text-align: justify;
  font-family: var(--primary-font);
`;

export const DescriptionLink = styled.a`
  cursor: pointer;
  color: var(--green-color);
`;
