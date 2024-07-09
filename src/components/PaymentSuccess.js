import React from 'react';
import styled from 'styled-components';

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

const PaymentSuccess = () => {
  return (
    <PaymentSuccessContainer>
      <SuccessIcon>
        <img src="../assets/success-icon.png" alt="Payment Successful" />
      </SuccessIcon>
      <SuccessTitle>Payment Successful</SuccessTitle>
      <SuccessText>Thank you for your purchase! Your order has been placed successfully</SuccessText>
      <ContinueShoppingButton onClick={() => window.location.href = '/shop'}>Continue Shopping</ContinueShoppingButton>
    </PaymentSuccessContainer>
  );
};

export default PaymentSuccess;
