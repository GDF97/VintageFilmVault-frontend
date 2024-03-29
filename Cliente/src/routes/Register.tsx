import styled from "styled-components";
import { Container } from "../styles/AllFilms.style.";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { clientAPI } from "../hooks/clientAPI";
import { useNavigate } from "react-router-dom";
import Notification from "../components/Notification";
import { ClientType } from "../types/ClientType";

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
const Register = () => {
  const navigate = useNavigate();

  const initialState: ClientType = {
    nm_cliente: "",
    cd_senha: "",
    nm_email: "",
    nm_endereco: "",
  };

  const [clientInfos, setClientInfos] = useState<ClientType | null>({
    nm_cliente: "",
    cd_senha: "",
    nm_email: "",
    nm_endereco: "",
  });
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [not, setNot] = useState(false);

  const handleInputChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setClientInfos(() => ({
      ...clientInfos,
      [name]: value,
    }));
  };

  return (
    <Container>
      {not && (
        <Notification status={status} message={message} setNot={setNot} />
      )}
      <Title>VintageFilmVault</Title>
      <Form onSubmit={() => console.log("teste")}>
        <InputGroup>
          <Label>Nome *</Label>
          <Input type="text" autoComplete="off" onChange={handleInputChanges} />
        </InputGroup>
        <InputGroup>
          <Label>Email *</Label>
          <Input type="text" autoComplete="off" onChange={handleInputChanges} />
        </InputGroup>
        <InputGroup>
          <Label>Senha *</Label>
          <Input type="text" onChange={handleInputChanges} />
        </InputGroup>
        <InputGroup>
          <Label>Endereço *</Label>
          <Input type="text" onChange={handleInputChanges} />
        </InputGroup>
        <PrimaryButton type="submit">Cadastrar</PrimaryButton>
        <SecondaryButton onClick={() => navigate("/login")}>
          Ja tem uma conta? Faça o Login!
        </SecondaryButton>
      </Form>
    </Container>
  );
};

export default Register;
