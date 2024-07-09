import React from 'react';
import styled from 'styled-components';

const OrderSummary = ({ items, total }) => (
  <SummaryContainer>
    <SummaryTitle>Order Summary</SummaryTitle>
    {items.map((item, index) => (
      <ItemContainer key={index}>
        <ItemImage src={item.image} alt={item.name} />
        <ItemDetails>
          <ItemName>{item.name}</ItemName>
          <ItemPrice>{item.price}</ItemPrice>
        </ItemDetails>
      </ItemContainer>
    ))}
    <SummaryDetails>
      <SummaryRow>
        <SummaryLabel>Total Products</SummaryLabel>
        <SummaryValue>{total}</SummaryValue>
      </SummaryRow>
      <SummaryRow>
        <SummaryLabel>Shopping Cost</SummaryLabel>
        <SummaryValue>Fee</SummaryValue>
      </SummaryRow>
      <SummaryRow>
        <SummaryLabel>Tax</SummaryLabel>
        <SummaryValue>₦1,000</SummaryValue>
      </SummaryRow>
      <SummaryRow>
        <SummaryLabel>Total Cost</SummaryLabel>
        <SummaryValue>{total + 1000}</SummaryValue>
      </SummaryRow>
    </SummaryDetails>
  </SummaryContainer>
);

const SummaryContainer = styled.div`
  padding: 1rem;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SummaryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 1rem;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const ItemPrice = styled.span`
  font-size: 1rem;
  color: #6b7280;
`;

const SummaryDetails = styled.div`
  margin-top: 1rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SummaryLabel = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const SummaryValue = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
`;

export default OrderSummary;
