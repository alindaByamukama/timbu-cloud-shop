import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const App = () => (
  <Router>
    <GlobalStyles />
    <Navbar />
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </Router>
);

export default App;
