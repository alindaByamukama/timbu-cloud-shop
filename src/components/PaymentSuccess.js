import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import successImage from '../assets/success-icon.png';


const PaymentSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 2rem;

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const SuccessIcon = styled.div`
  font-size: 3rem;
  color: #4CAF50;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SuccessTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SuccessText = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const ContinueShoppingButton = styled.button`
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

const SuccessImage = styled.img`
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

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    // Redirect to cart page
    navigate('/');
  };
  return (
    <PaymentSuccessContainer>
      <SuccessIcon>
        <SuccessImage src={successImage} alt="Success" />
      </SuccessIcon>
      <SuccessTitle>Payment Successful</SuccessTitle>
      <SuccessText>Thank you for your purchase! Your order has been placed successfully</SuccessText>
      <ContinueShoppingButton onClick={handleContinueShopping}>Continue Shopping</ContinueShoppingButton>
    </PaymentSuccessContainer>
  );
};

export default PaymentSuccess;
