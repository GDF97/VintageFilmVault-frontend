import styled from "styled-components";
import { Container } from "../styles/AllFilms.style.";
import { FormEvent, useState } from "react";
import { clientAPI } from "../hooks/clientAPI";
import { useNavigate } from "react-router-dom";
import Notification from "../components/Notification";
import { ClientType } from "../types/ClientType";
import { validateInfos } from "../utils/validateRegister";

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

const SmallTag = styled.small`
  color: red;
`;

const Register = () => {
  const navigate = useNavigate();
  const useClientApi = clientAPI();

  const [clientInfos, setClientInfos] = useState<ClientType | null>({
    nm_cliente: "",
    cd_senha: "",
    nm_email: "",
    nm_endereco: "",
  });

  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ClientType | null>(null);

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

  const clientRegister = async (e: FormEvent) => {
    e.preventDefault();

    const dataClient: ClientType = {
      nm_cliente: clientInfos?.nm_cliente,
      cd_senha: clientInfos?.cd_senha,
      nm_email: clientInfos?.nm_email,
      nm_endereco: clientInfos?.nm_endereco,
    };

    const validateErrors = validateInfos(dataClient);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    try {
      const data = await useClientApi.clientRegister(dataClient);
      console.log(data);
      if (data.status === "success") {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
      setNot(true);
      setMessage(data.message);
      setStatus(data.status);
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
      <Form onSubmit={clientRegister}>
        <InputGroup>
          <Label>Nome *</Label>
          <Input
            type="text"
            autoComplete="off"
            value={clientInfos?.nm_cliente}
            onChange={handleInputChanges}
            name="nm_cliente"
          />
          {errors?.nm_cliente && <SmallTag>{errors.nm_cliente}</SmallTag>}
        </InputGroup>
        <InputGroup>
          <Label>Email *</Label>
          <Input
            type="text"
            autoComplete="off"
            value={clientInfos?.nm_email}
            onChange={handleInputChanges}
            name="nm_email"
          />
          {errors?.nm_email && <SmallTag>{errors.nm_email}</SmallTag>}
        </InputGroup>
        <InputGroup>
          <Label>Senha *</Label>
          <Input
            type="text"
            onChange={handleInputChanges}
            value={clientInfos?.cd_senha}
            name="cd_senha"
          />
          {errors?.cd_senha && <SmallTag>{errors.cd_senha}</SmallTag>}
        </InputGroup>
        <InputGroup>
          <Label>Endereço *</Label>
          <Input
            type="text"
            value={clientInfos?.nm_endereco}
            onChange={handleInputChanges}
            name="nm_endereco"
          />
          {errors?.nm_endereco && <SmallTag>{errors.nm_endereco}</SmallTag>}
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
