"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png'; // Assume the logo is saved in src/assets/logo.png

const Navbar = () => (
  <Nav>
    <Logo src={logo} alt="VistaMart Logo" />
    <NavLinks>
      <NavLink to="/">Categories</NavLink>
      <NavLink to="/new-arrivals">New Arrivals</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </NavLinks>
    <SearchContainer>
      <SearchInput type="text" placeholder="Search Product" />
      <SearchButton>Q</SearchButton>
    </SearchContainer>
    <Icons>
      <AccountIcon>👤 Account</AccountIcon>
      <CartIcon>🛒</CartIcon>
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
`;

const Logo = styled.img`
  height: 40px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
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
`;

const Icons = styled.div`
  display: flex;
  gap: 1.5rem;
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

export default Navbar;
