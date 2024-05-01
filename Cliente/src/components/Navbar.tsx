import { useNavigate, Navigate } from "react-router-dom";
import {
  Button,
  ClientName,
  Header,
  Links,
  Logo,
  Wrapper,
} from "../styles/Navbar.style";
import { useContext, useEffect, useState } from "react";
import { ClientType } from "../types/ClientType";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import Cart from "./Cart";
import { CartContext } from "../contexts/CartContext/CartContext";

const Navbar = () => {
  const auth = useContext(AuthContext);
  const { qntdFilmes } = useContext(CartContext);
  const navigate = useNavigate();
  const [clientInfos, setClientInfos] = useState<ClientType | null>(null);

  const checkForClient = () => {
    const client = localStorage.getItem("cliente");
    if (client) {
      setClientInfos(JSON.parse(client));
    } else {
      setClientInfos(null);
    }
  };

  useEffect(() => {
    checkForClient();
  }, []);

  const logOut = () => {
    auth.logOut();
  };

  return (
    <Header>
      <Logo onClick={() => navigate("/")}>VintageFilmVault</Logo>
      <Wrapper>
        <Links onClick={() => navigate("/all-films")}>Todos os Filmes</Links>
        <Links>Filmes Novos</Links>
        <Links>Filmes Antigos</Links>
      </Wrapper>
      <Wrapper>
        {!clientInfos ? (
          <>
            <Button onClick={() => navigate("/login")}>Login</Button>
            <Button color="red" onClick={() => navigate("/register")}>
              Cadastrar
            </Button>
          </>
        ) : (
          <>
            <ClientName>{clientInfos.nm_cliente}</ClientName>
            <Cart qntdFilmes={qntdFilmes} />
            <Button
              color="red"
              onClick={() => {
                logOut();
                navigate("/all-films");
                checkForClient();
              }}
            >
              Sair
            </Button>
          </>
        )}
      </Wrapper>
    </Header>
  );
};

export default Navbar;
