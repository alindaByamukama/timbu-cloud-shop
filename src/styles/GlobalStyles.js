import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color-light: #69b3f3;
    --primary-color: #007bff;
    --primary-color-dark: #0056b3;
    --secondary-color-light: #d3d3d3;
    --secondary-color: #808080;
    --secondary-color-dark: #333333;
    --accent-color-light: #ff8a80;
    --accent-color: #ff5252;
    --accent-color-dark: #e53935;
    --neutral-color: #ffffff;
    --success-color: #4caf50;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--neutral-color);
    color: var(--secondary-color-dark);
  }

  h1, .heading-1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  h2, .heading-2 {
    font-size: 2rem;
    font-weight: bold;
  }

  h3, .heading-3 {
    font-size: 1.75rem;
    font-weight: bold;
  }

  h4, .heading-4 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h5, .heading-5 {
    font-size: 1.25rem;
    font-weight: bold;
  }

  h6, .heading-6 {
    font-size: 1rem;
    font-weight: bold;
  }

  h7, .heading-7 {
    font-size: 0.875rem;
    font-weight: bold;
  }

  h8, .heading-8 {
    font-size: 0.75rem;
    font-weight: bold;
  }

  .medium-1 {
    font-size: 2.5rem;
    font-weight: 500;
  }

  .medium-2 {
    font-size: 2rem;
    font-weight: 500;
  }

  .medium-3 {
    font-size: 1.75rem;
    font-weight: 500;
  }

  .medium-4 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .medium-5 {
    font-size: 1.25rem;
    font-weight: 500;
  }

  .medium-6 {
    font-size: 1rem;
    font-weight: 500;
  }

  .medium-7 {
    font-size: 0.875rem;
    font-weight: 500;
  }

  .medium-8 {
    font-size: 0.75rem;
    font-weight: 500;
  }

  .regular-1 {
    font-size: 2.5rem;
    font-weight: normal;
  }

  .regular-2 {
    font-size: 2rem;
    font-weight: normal;
  }

  .regular-3 {
    font-size: 1.75rem;
    font-weight: normal;
  }

  .regular-4 {
    font-size: 1.5rem;
    font-weight: normal;
  }

  .regular-5 {
    font-size: 1.25rem;
    font-weight: normal;
  }

  .regular-6 {
    font-size: 1rem;
    font-weight: normal;
  }

  .regular-7 {
    font-size: 0.875rem;
    font-weight: normal;
  }

  .regular-8 {
    font-size: 0.75rem;
    font-weight: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
