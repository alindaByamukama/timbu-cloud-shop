"use client";

import React from 'react';
import styled from 'styled-components';

const ProductCard = ({ product }) => (
  <Card>
    <ImageContainer>
        <Image src={product.image} alt={product.name} />
    </ImageContainer>
    <Info>
      <Name>{product.name}</Name>
      <Description>{product.description}</Description>
      <Price>{product.price}</Price>
    </Info>
    <AddToCartButton>Add to Cart</AddToCartButton>
  </Card>
);


const AddToCartButton = styled.button`
  padding: 0.75rem 2rem;
  background: var(--accent-color);
  color: var(--neutral-color);
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;

  &:hover {
    background: var(--accent-color-dark);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  background: #f0f0f0;
  padding: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Info = styled.div`
  padding: 1rem;
  text-align: center;
  transition: filter 0.3s;
`;

const Name = styled.h3`
  font-size: 1.5rem;
  color: var(--secondary-color-dark);
`;

const Description = styled.p`
  font-size: 1rem;
  color: var(--secondary-color);
`;

const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--primary-color);
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s;
  position: relative;

  &:hover {
    transform: scale(1.05);

    ${Info} {
      filter: blur(5px);
    }
      
    ${AddToCartButton} {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

export default ProductCard;
