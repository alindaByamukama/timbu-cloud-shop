"use client";

import React from 'react';
import styled from 'styled-components';

const CartProductDetails = ({ product }) => (
  <DetailsContainer>
    <ProductImage src={product.image} alt={product.name} />
    <ProductInfo>
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
    </ProductInfo>
  </DetailsContainer>
);

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;

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

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ProductInfo = styled.div`
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ProductName = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const ProductDescription = styled.div`
  font-size: 0.875rem;
  color: #555;
`;

export default CartProductDetails;
