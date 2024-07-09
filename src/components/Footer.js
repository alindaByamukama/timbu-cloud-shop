"use client";

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <Column>
        <ColumnTitle>Link</ColumnTitle>
        <FooterLink to="/">Categories</FooterLink>
        <FooterLink to="/">New Arrivals</FooterLink>
        <FooterLink to="/">Contact Us</FooterLink>
        <FooterLink to="/">FAQ</FooterLink>
      </Column>
      <Column>
        <ColumnTitle>Legal Information</ColumnTitle>
        <FooterLink to="/">Privacy Policy</FooterLink>
        <FooterLink to="/">Terms of Service</FooterLink>
      </Column>
      <Column>
        <ColumnTitle>Follow Us</ColumnTitle>
        <SocialIcons>
          <SocialIcon href="https://facebook.com">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="https://twitter.com">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com">
            <FaLinkedinIn />
          </SocialIcon>
          <SocialIcon href="https://instagram.com">
            <FaInstagram />
          </SocialIcon>
        </SocialIcons>
      </Column>
      <Column>
        <ColumnTitle>Newsletter</ColumnTitle>
        <NewsletterText>Subscribe to our newsletter to get latest news</NewsletterText>
        <NewsletterForm>
          <NewsletterInput type="email" placeholder="Enter email address" />
          <NewsletterButton>Subscribe</NewsletterButton>
        </NewsletterForm>
      </Column>
    </FooterContent>
    <FooterBottom>
      © 2024 VistaMart, All Rights Reserved.
    </FooterBottom>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background-color: #023047;
  color: white;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled.div`
  @media (min-width: 768px) {
    flex: 1;
    min-width: 200px;
    margin: 1rem;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    text-align: center;
  }
`;

const ColumnTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  display: block;
  color: white;
  margin-bottom: 0.5rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  &:hover {
    color: var(--primary-color);
  }
`;

const NewsletterText = styled.p`
  margin-bottom: 1rem;
`;

const NewsletterForm = styled.form`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NewsletterInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 20px 0 0 20px;
  outline: none;

  @media (max-width: 768px) {
    border-radius: 20px;
    margin-bottom: 0.5rem;
    width: 100%;
  }
`;

const NewsletterButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: 0 20px 20px 0;
  cursor: pointer;

  &:hover {
    background-color: var(--accent-color-dark);
  }

  @media (max-width: 768px) {
    border-radius: 20px;
    width: 100%;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 1rem;
  text-align: center;
  margin-top: 1rem;
`;

export default Footer;
