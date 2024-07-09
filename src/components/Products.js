import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import ProductCatalog from '../components/ProductCatalog';

const Products = () => (
  <Container>
    <Banner />
    <ProductCatalog />
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
