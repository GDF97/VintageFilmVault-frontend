import { ShoppingCartIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CartWrapper = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: white;
`;

const CartItemsNumber = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 12px;
  color: var(--red-color);
`;

export default function Cart({ qntdFilmes }: { qntdFilmes: number }) {
  const navigate = useNavigate();

  return (
    <CartWrapper onClick={() => navigate("/cart-details")}>
      <ShoppingCartIcon />
      <CartItemsNumber>{qntdFilmes === 0 ? "" : qntdFilmes}</CartItemsNumber>
    </CartWrapper>
  );
}
