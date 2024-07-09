import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PaymentMethod = () => {
  const navigate = useNavigate();
  const handlePayButton = () => {
    // Redirect to cart page
    navigate('/success');
  };
  return (
      <PaymentContainer>
    <PaymentTitle>Payment Method</PaymentTitle>
    <Form>
      <InputRow>
        <Input placeholder="Email" />
        <Input placeholder="Phone" />
      </InputRow>
      <InputRow>
        <Input placeholder="Card Number" />
        <Input placeholder="MM/YY" />
        <Input placeholder="CVC" />
      </InputRow>
      <Input placeholder="Card holder Name" />
      <PayButton onClick={handlePayButton}>Pay Now</PayButton>
    </Form>
  </PaymentContainer>
  )
};

const PaymentContainer = styled.div`
  padding: 1rem;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const PaymentTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  font-size: 1rem;
`;

const PayButton = styled.button`
  padding: 0.75rem;
  background: #f97316;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #ea580c;
  }
`;

export default PaymentMethod;
