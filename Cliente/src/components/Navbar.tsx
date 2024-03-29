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
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button color="red" onClick={() => navigate("/register")}>
          Cadastrar
        </Button>
      </Wrapper>
    </Header>
  );
};

export default Navbar;
