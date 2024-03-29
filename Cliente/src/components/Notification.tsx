import styled from "styled-components";

const NotificationBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  top: 50px;
  right: 50px;
  width: 325px;
  height: fit-content;
  padding: 0.5rem;
  background-color: white;
  border-bottom: 5px solid
    ${(props) =>
      props.color === "success" ? "var(--green-color)" : "var(--red-color)"};
`;

const Title = styled.h1`
  font-size: 18px;
  color: var(-brown-color);
  font-family: var(--primary-font);
  text-transform: capitalize;
`;

const Message = styled.p`
  font-size: 14px;
  color: var(--brown-color);
  font-family: Arial, Helvetica, sans-serif;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: var(--brown-color);
  color: white;
  border: none;
  cursor: pointer;
`;

type CloseFunction = {
  setNot: React.Dispatch<React.SetStateAction<boolean>>;
};

const Notification = ({
  status,
  message,
  setNot,
}: {
  status: string;
  message: string;
} & CloseFunction) => {
  return (
    <NotificationBody color={status}>
      <Title>{status}</Title>
      <Message>{message}</Message>
      <Button onClick={() => setNot(false)}>Fechar Notificação</Button>
    </NotificationBody>
  );
};

export default Notification;
