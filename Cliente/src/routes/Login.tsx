import styled from "styled-components";
import { Container } from "../styles/AllFilms.style.";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { clientAPI } from "../hooks/clientAPI";
import { useNavigate } from "react-router-dom";
import Notification from "../components/Notification";

const Title = styled.h1`
  font-size: 4rem;
  font-family: var(--secondary-font);
`;

const Form = styled.form`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Input = styled.input`
  width: 325px;
  padding: 0.25rem;
  outline: none;
  border: 2px solid var(--brown-color);
`;

const Label = styled.label`
  font-size: 16px;
  font-family: var(--primary-font);
`;

const Button = styled.button`
  font-size: 16px;
  cursor: pointer;
  padding: 0.25rem;
  font-family: var(--primary-font);
  border: 2px solid transparent;
`;

const PrimaryButton = styled(Button)`
  color: white;
  background-color: var(--brown-color);
`;

const SecondaryButton = styled(Button)`
  background: transparent;

  &:hover {
    border-bottom: 2px solid var(--brown-color);
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [not, setNot] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { isAuth, message, status } = await auth.loginCliente(email, senha);
      console.log(isAuth);
      if (isAuth) {
        setTimeout(() => {
          navigate("/all-films");
        }, 2000);
      }
      setNot(true);
      setMessage(message);
      setStatus(status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {not && (
        <Notification status={status} message={message} setNot={setNot} />
      )}
      <Title>VintageFilmVault</Title>
      <Form onSubmit={handleLogin}>
        <InputGroup>
          <Label>Email</Label>
          <Input
            type="text"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label>Senha</Label>
          <Input
            type="text"
            value={senha}
            onChange={(e) => setSenha(e.currentTarget.value)}
          />
        </InputGroup>
        <PrimaryButton type="submit">Entrar</PrimaryButton>
        <SecondaryButton onClick={() => navigate("/register")}>
          Cadastrar-se
        </SecondaryButton>
      </Form>
    </Container>
  );
};

export default Login;
