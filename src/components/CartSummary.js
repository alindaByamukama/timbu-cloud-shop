"use client";

import React from 'react';
import styled from 'styled-components';

const CartSummary = ({ totalProducts, totalPrice, onCheckout }) => (
  <SummaryContainer>
    <SummaryTitle>Summary</SummaryTitle>
    <SummaryItem>
      <SummaryLabel>Total Products</SummaryLabel>
      <SummaryValue>{`${totalProducts}`}</SummaryValue>
    </SummaryItem>
    <SummaryItem>
      <SummaryLabel>Shopping Cost</SummaryLabel>
      <SummaryValue>Fee</SummaryValue>
    </SummaryItem>
    <SummaryItem>
      <SummaryLabel>Total Cost</SummaryLabel>
      <SummaryValue>{`₦${totalPrice}`}</SummaryValue>
    </SummaryItem>
    <CheckoutButton onClick={onCheckout}>Check Out</CheckoutButton>
  </SummaryContainer>
);

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const SummaryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const SummaryLabel = styled.div`
  font-size: 1rem;
`;

const SummaryValue = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  background-color: #FF6B6B;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #FF3B3B;
  }
`;

export default CartSummary;
