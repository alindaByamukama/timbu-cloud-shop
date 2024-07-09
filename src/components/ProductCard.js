"use client";

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleAddToCart = () => {
    // Add product to cart logic
    router.push('/cart');
  };

  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Info>
        <Name>{product.name}</Name>
        <Description>{product.description}</Description>
        <Price>{`₦${product.price}`}</Price>
      </Info>
      <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 5px;
  position: relative;

  &:hover ${Info} {
    filter: blur(4px);
  }

  &:hover ${AddToCartButton} {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const Name = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Description = styled.div`
  color: #888;
  margin: 0.5rem 0;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const AddToCartButton = styled.button`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    background-color: #ff3b30;
  }
`;

export default ProductCard;
