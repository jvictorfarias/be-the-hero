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
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing: antialiased !important;

    h1 {
      color: ${({ theme }) => theme.titleColor};
    }

    span{
      color: ${({ theme }) => theme.titleColor};
    }
  }

  input, button, textarea{
    font: 400 14px Roboto, sans-serif;
    background: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.borderColor};

  }

  button {
    cursor: pointer;
  }

`;
