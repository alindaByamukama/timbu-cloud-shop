import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => (
  <Nav>
    <NavLink to="/">Products</NavLink>
    <NavLink to="/cart">Cart</NavLink>
    <NavLink to="/checkout">Checkout</NavLink>
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background: #333;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 1.2rem;
`;

export default Navbar;
