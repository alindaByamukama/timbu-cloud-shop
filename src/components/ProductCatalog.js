"use client";

import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Bamboo Lid',
    description: 'Durable bottle with a sustainable bamboo lid.',
    price: '₦20,000',
    image: require('../assets/bamboo-lid.png')
  },
  {
    id: 2,
    name: 'Insulated',
    description: 'Keep drinks cold or hot with this double-walled.',
    price: '₦16,000',
    image: require('../assets/insulated.png')
  },
  {
    id: 3,
    name: 'Infuser',
    description: 'Durable bottle with a sustainable bamboo lid.',
    price: '₦20,000',
    image: require('../assets/infuser.png')
  },
  {
    id: 4,
    name: 'Collapsible',
    description: 'Space-saving design, ideal for travel.',
    price: '₦25,000',
    image: require('../assets/collapsible-1.png')
  },
  {
    id: 5,
    name: 'Glass',
    description: 'Pure and simple glass bottle, safe.',
    price: '₦27,000',
    image: require('../assets/glass.png')
  },
  {
    id: 6,
    name: 'Straw Lid',
    description: 'Easy to drink straw lid, perfect for kids.',
    price: '₦25,000',
    image: require('../assets/straw-lid.png')
  },
  {
    id: 7,
    name: 'Wide Mouth',
    description: 'Wide mouth for easy filling and cleaning.',
    price: '₦22,000',
    image: require('../assets/wide-mouth.png')
  },
  {
    id: 8,
    name: 'Sport',
    description: 'Lightweight and durable, perfect for gym.',
    price: '₦15,000',
    image: require('../assets/sport.png')
  }
];

const ProductCatalog = () => (
  <CatalogContainer>
    <Title>Discover Our Products</Title>
    <ProductList>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductList>
  </CatalogContainer>
);

const CatalogContainer = styled.div`
  padding: 2rem;
  margin: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--primary-color-dark);
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export default ProductCatalog;
