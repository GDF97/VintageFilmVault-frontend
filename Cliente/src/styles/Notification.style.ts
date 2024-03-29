import styled from "styled-components";

export const NotificationBody = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 325px;
  height: 250px;
  padding: 0.5rem;
  border-bottom: 2px solid
    ${(props) =>
      props.color === "success" ? "var(--green-color)" : "var(--red-color)"};
`;
