import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import OrderSummary from './CheckoutOrderSummary';
import PaymentMethod from './CheckoutPaymentMethod';

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BackLink = styled(Link)`
  align-self: flex-start;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const BackIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CheckoutTitle = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 2rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const CheckoutContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PaymentSection = styled.div`
  flex: 1;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const SummarySection = styled.div`
  flex: 1;
`;

const Checkout = () => {
  return (
    <CheckoutContainer>
      <BackLink to="/cart">
        <BackIcon>&larr;</BackIcon> Back
      </BackLink>
      <CheckoutTitle>Check Out</CheckoutTitle>
      <CheckoutContent>
        <PaymentSection>
          <PaymentMethod />
        </PaymentSection>
        <SummarySection>
          <OrderSummary />
        </SummarySection>
      </CheckoutContent>
    </CheckoutContainer>
  );
};

export default Checkout;
