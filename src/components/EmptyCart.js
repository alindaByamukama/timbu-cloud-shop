import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import emptyCartImage from '../assets/empty-cart-icon.png';

const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 2rem;

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const EmptyCartIcon = styled.div`
  font-size: 3rem;
  color: #00A3E0;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const EmptyCartTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const EmptyCartText = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const ShopNowButton = styled.button`
  background-color: #FF6F61;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.875rem;
  }
`;

const EmptyCartImage = styled.img`
  width: 682px;
  height: 420px;
  gap: 0px;
  opacity: 1;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 1rem;
  }
`;

const EmptyCart = () => {
  const navigate = useNavigate();
  const handleShopNow = () => {
    navigate('/');
  };
  return (
    <EmptyCartContainer>
      <EmptyCartIcon>
        <EmptyCartImage src={emptyCartImage} alt="Empty Cart" />
      </EmptyCartIcon>
      <EmptyCartTitle>Your Cart is Empty</EmptyCartTitle>
      <EmptyCartText>You haven't added anything to your cart. Explore our collection</EmptyCartText>
      <ShopNowButton onClick={handleShopNow}>Shop Now</ShopNowButton>
    </EmptyCartContainer>
  );
};

export default EmptyCart;
