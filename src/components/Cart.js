"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Bamboo Lid',
      description: 'Durable bottle with a sustainable bamboo lid.',
      price: 20000,
      image: require('../assets/bamboo-lid.png'),
      quantity: 1,
    },
    {
      id: 2,
      name: 'Sport',
      description: 'Lightweight and durable, perfect for gym.',
      price: 15000,
      image: require('../assets/sport.png'),
      quantity: 1,
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleDecrease = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const handleIncrease = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const totalProducts = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContainer>
      <BackLink to="/">Back</BackLink>
      <CartTitle>Your Cart</CartTitle>
      <CartContent>
        <CartItems>
          {cartItems.map(item => (
            <CartItem 
              key={item.id} 
              product={item} 
              quantity={item.quantity} 
              onRemove={handleRemove} 
              onDecrease={handleDecrease} 
              onIncrease={handleIncrease} 
            />
          ))}
        </CartItems>
        <CartSummary totalProducts={totalProducts} totalCost={totalCost} />
      </CartContent>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:before {
    content: '←';
    margin-right: 0.5rem;
  }
`;

const CartTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CartContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CartItems = styled.div`
  flex: 2;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Cart;
