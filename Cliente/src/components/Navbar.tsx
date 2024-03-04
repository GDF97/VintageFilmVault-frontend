import { useNavigate } from "react-router-dom";
import { Button, Header, Links, Logo, Wrapper } from "../styles/Navbar.style";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <Logo onClick={() => navigate("/")}>VintageFilmVault</Logo>
      <Wrapper>
        <Links onClick={() => navigate("/all-films")}>Todos os Filmes</Links>
        <Links>Filmes Novos</Links>
        <Links>Filmes Antigos</Links>
      </Wrapper>
      <Wrapper>
        <Button>Login</Button>
        <Button color="red">Cadastrar</Button>
      </Wrapper>
    </Header>
  );
};

export default Navbar;
