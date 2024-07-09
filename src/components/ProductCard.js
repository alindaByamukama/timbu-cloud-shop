"use client";

import React from 'react';
import styled from 'styled-components';

const ProductCard = ({ product }) => (
  <Card>
    <Image src={product.image} alt={product.name} />
    <Info>
      <Name>{product.name}</Name>
      <Description>{product.description}</Description>
      <Price>{product.price}</Price>
      <Button>Add to Cart</Button>
    </Info>
  </Card>
);

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Info = styled.div`
  padding: 1rem;
  text-align: center;
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

const Button = styled.button`
  padding: 0.75rem 2rem;
  background: var(--accent-color);
  color: var(--neutral-color);
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background: var(--accent-color-dark);
  }
`;

export default ProductCard;
