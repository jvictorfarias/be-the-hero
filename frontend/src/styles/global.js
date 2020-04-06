import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }

  html,
  body,
  #root{
    min-height: 100%;
  }

  body{
    font: 400 14px Roboto, sans-serif;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased !important;
  }

  input, button, textarea{
    font: 400 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
