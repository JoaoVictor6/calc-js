import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 400;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;