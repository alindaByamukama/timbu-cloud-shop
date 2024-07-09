"use client";

import React from 'react';
import styled from 'styled-components';
import CartProductDetails from './CartProductDetails';

const CartItem = ({ product, onRemove, onDecrease, onIncrease }) => {
  return (
    <ItemContainer>
      <CartProductDetails product={product} />
      <Quantity>
        <QuantityButton onClick={() => onDecrease(product.id)}>-</QuantityButton>
        <span>{product.quantity}</span>
        <QuantityButton onClick={() => onIncrease(product.id)}>+</QuantityButton>
      </Quantity>
      <Price>{`₦${product.price * product.quantity}`}</Price>
      <RemoveButton onClick={() => onRemove(product.id)}>×</RemoveButton>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ddd;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const QuantityButton = styled.button`
  background: none;
  border: 1px solid #ddd;
  padding: 0.5rem;
  cursor: pointer;
`;

const Price = styled.div`
  font-size: 1rem;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default CartItem;
