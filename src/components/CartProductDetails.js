"use client";

import React from 'react';
import styled from 'styled-components';

const CartProductDetails = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{`₦${product.price}`}</ProductPrice>
      </ProductInfo>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.div`
  font-size: 1rem;
  color: #777;
`;

export default CartProductDetails;
