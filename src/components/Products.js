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

export default Products;
