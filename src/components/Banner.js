"use client";

import React from 'react';
import styled from 'styled-components';
import bannerImage from '../assets/banner.png';

const Banner = () => (
  <BannerContainer>
    <Content>
      <Title>Every Sip is a Step Towards Sustainability</Title>
      <Subtitle>Our eco-friendly water bottles offer sustainable hydration solutions. Enjoy pure refreshment while reducing environmental impact.</Subtitle>
      <Button>Shop Now</Button>
    </Content>
    <BannerImage src={bannerImage} alt="Banner" />
  </BannerContainer>
);

const BannerContainer = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: left;
  color: var(--neutral-color);
  padding: 2rem;
  background-color: #F6FCFF;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }

  // @media (max-width: 480px) {
  //   height: 300px;
  //   padding: 0.5rem;
  // }
`;

const Content = styled.div`
  max-width: 600px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-color-dark);

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  -webkit-text-stroke-width: 0.09px;
  -webkit-text-stroke-color: var(--neutral-color);
  margin: 1rem 0;
  color: var(--secondary-color-dark);

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  background: var(--accent-color);
  color: var(--neutral-color);
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: var(--accent-color-dark);
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    padding: 0.25rem 1rem;
    font-size: 0.75rem;
  }
`;

const BannerImage = styled.img`
  width: 682px;
  height: 420px;
  gap: 0px;
  opacity: 1;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 1rem;
  }
`;
export default Banner;
