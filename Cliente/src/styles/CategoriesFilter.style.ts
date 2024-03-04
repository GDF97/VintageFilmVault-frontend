import styled from "styled-components";

export const CategoryButtonBody = styled.div`
  position: relative;
  width: 250px;
  outline: 2px solid var(--brown-color);
  background-color: white;
  padding: 0.5rem;
  box-shadow: 4px 4px 0 0 var(--green-color), 8px 8px 0 0 var(--red-color);
`;

export const CategoryTitle = styled.p`
  font-size: 18px;
  color: var(--brown-color);
  text-align: center;
  font-family: var(--primary-font);
  cursor: pointer;
  user-select: none;
`;

export const CategoriesWrapper = styled.div`
  position: absolute;
  top: 55px;
  left: 0;
  width: 100%;
  outline: 2px solid var(--brown-color);
  background-color: white;
  box-shadow: 4px 4px 0 0 var(--green-color), 8px 8px 0 0 var(--red-color);
`;

export const CategoryButton = styled.button`
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-family: var(--primary-font);
  padding: 0.5rem;
  cursor: pointer;
  border-bottom: 2px solid var(--brown-color);

  &:last-child {
    border: none;
  }

  &:hover {
    background-color: #d7d7d7;
  }
`;
