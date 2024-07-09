"use client";

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CartSummary = ({ totalProducts }) => {
  const navigate = useNavigate();

  const handleAddToCheckout = () => {
    // Redirect to checkout page
    navigate('/checkout');
  };

  return (
    <SummaryContainer>
      <SummaryTitle>Summary</SummaryTitle>
      <SummaryItem>
        <span>Total Products</span>
        <span>{`${totalProducts}`}</span>
      </SummaryItem>
      <SummaryItem>
        <span>Shopping Cost</span>
        <span>Fee</span>
      </SummaryItem>
      <SummaryItem>
        <span>Total Cost</span>
        <span>₦36,000</span>
      </SummaryItem>
      <CheckoutButton onClick={handleAddToCheckout}>Check Out</CheckoutButton>
    </SummaryContainer>
  );
};

const SummaryContainer = styled.div`
  flex: 1;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
  margin-left: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 2rem;
  }
`;

const SummaryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CheckoutButton = styled.button`
  background: #ff6f61;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: auto;
  }
`;

export default CartSummary;
