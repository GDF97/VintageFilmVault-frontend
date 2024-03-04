import { useNavigate } from "react-router-dom";
import Poster1 from "../assets/Poster1.jpg";
import Poster2 from "../assets/Poster2.jpg";
import filmroll from "../assets/filmroll.png";
import {
  ButtonKnow,
  DescLP,
  Description,
  DescriptionLink,
  DescriptionPage,
  DescriptionParagraph,
  HomeWrapper,
  LandingPage,
  PosterDiv,
  PosterLandingPage,
  SubTitle,
  Title,
} from "../styles/Home.style";

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeWrapper>
      <LandingPage>
        <PosterDiv>
          <PosterLandingPage src={Poster1} />
          <PosterLandingPage src={Poster2} />
        </PosterDiv>
        <Title>VintageFilmVault</Title>
        <DescLP>
          Reviva a Magia do Cinema: Uma locadora à moda antiga, onde clássicos e
          lançamentos se encontram em um único lugar!
        </DescLP>
        <ButtonKnow href="#dsc">Saiba Mais</ButtonKnow>
      </LandingPage>
      <DescriptionPage id="dsc">
        <img src={filmroll} alt="" />
        <Description>
          <SubTitle>VintageFilmVault</SubTitle>
          <DescriptionParagraph>
            Bem-vindo a uma experiência única no mundo do cinema! Em nossa
            locadora, você não apenas aluga filmes, mas embarca em uma jornada
            pelo tempo, revivendo a magia autêntica do cinema. Somos uma
            locadora à moda antiga, onde a nostalgia se mistura com a
            modernidade, proporcionando uma coleção abrangente de filmes antigos
            e lançamentos, todos cuidadosamente selecionados em um só lugar.
          </DescriptionParagraph>
          <DescriptionParagraph>
            Ao entrar em nosso espaço, você será envolvido por uma atmosfera que
            celebra a riqueza do cinema clássico e contemporâneo. Explore os
            corredores repletos de títulos atemporais, desde as obras-primas que
            marcaram eras até as mais recentes produções que conquistaram
            corações.
          </DescriptionParagraph>
          <DescriptionParagraph>
            Reviva a magia{" "}
            <DescriptionLink onClick={() => navigate("/all-films")}>
              clicando aqui
            </DescriptionLink>
          </DescriptionParagraph>
        </Description>
      </DescriptionPage>
    </HomeWrapper>
  );
};

export default Home;
