import styled from "styled-components";

export const Header = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2.5rem;
  background-color: var(--brown-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  border-bottom: 2px solid var(--red-color);
`;

export const Logo = styled.a`
  font-size: 1.75rem;
  font-family: var(--secondary-font);
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const Links = styled.button`
  font-family: var(--primary-font);
  font-size: 1rem;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 125px;
  font-size: 1rem;
  font-family: var(--primary-font);
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 100px 10px 100px 10px;
  background-color: ${(props) =>
    props.color === "red" ? "var(--red-color)" : "var(--green-color)"};
  cursor: pointer;
`;

export const ClientName = styled.p`
  font-family: Arial, Helvetica, sans-serif;
`;
