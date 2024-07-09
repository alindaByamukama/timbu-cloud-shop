"use client";

import React from 'react';
import styled from 'styled-components';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';

const CartItem = ({ product, quantity, onRemove, onDecrease, onIncrease }) => (
  <ItemContainer>
    <ProductImage src={product.image} alt={product.name} />
    <ProductDetails>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{`₦${product.price}`}</ProductPrice>
    </ProductDetails>
    <QuantityControl>
      <QuantityButton onClick={() => onDecrease(product.id)}><FaMinus /></QuantityButton>
      <Quantity>{quantity}</Quantity>
      <QuantityButton onClick={() => onIncrease(product.id)}><FaPlus /></QuantityButton>
    </QuantityControl>
    <TotalPrice>{`₦${product.price * quantity}`}</TotalPrice>
    <RemoveButton onClick={() => onRemove(product.id)}><FaTimes /></RemoveButton>
  </ItemContainer>
);

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
  background-color: #F0F0F0;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ProductName = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const ProductPrice = styled.div`
  font-size: 1rem;
  color: #555;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const QuantityButton = styled.button`
  background: none;
  border: 1px solid #ddd;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
`;

const Quantity = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const TotalPrice = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #000;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #f00;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export default CartItem;
