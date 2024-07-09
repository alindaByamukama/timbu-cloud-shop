"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import searchIcon from '../assets/search-icon.png';
import cartIcon from '../assets/cart-icon.png';
import accountIcon from '../assets/account-icon.png';

const Navbar = () => (
  <Nav>
    <Logo src={logo} alt="VistaMart Logo" />
    <NavLinks>
      <NavLink to="/">Categories</NavLink>
      <NavLink to="#">New Arrivals</NavLink>
      <NavLink to="#">Contact Us</NavLink>
    </NavLinks>
    <SearchContainer>
      <SearchInput type="text" placeholder="Search Product" />
      <SearchButton>
        <Icon  src={searchIcon} alt="Search Products"/>
        </SearchButton>
    </SearchContainer>
    <Icons>
      <AccountIcon>
        <Icon src={accountIcon} alt="Account" /> Account
      </AccountIcon>
      <NavLink to="/emptycart">
        <CartIcon>
          <Icon  src={cartIcon} alt="Cart" />
        </CartIcon>
      </NavLink>
    </Icons>
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--neutral-color);
  border-bottom: 1px solid var(--secondary-color-light);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  height: 40px;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: var(--secondary-color-dark);
  font-size: 1rem;
  font-weight: 500;
  &:hover {
    color: var(--primary-color);
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--secondary-color-light);
  border-radius: 20px;
  padding: 0.5rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  padding: 0.5rem;
  font-size: 1rem;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;

  @media (max-width: 480px) {
    width: 100px;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AccountIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

const CartIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

const Icon = styled.img`
  height: 24px;
  margin-right: 0.5rem;
`;

export default Navbar;
