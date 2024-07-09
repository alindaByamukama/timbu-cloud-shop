import React from 'react';
import styled from 'styled-components';

const Products = () => (
  <Container>
    <h1>Welcome to the Products Page</h1>
    <Button>Click Me</Button>
  </Container>
);

const Container = styled.div`
  padding: 2rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

export default Products;
