import styled from 'styled-components';

export const LogonContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  section {
    width: 100%;
    max-width: 350px;
    margin: 30px;
  }
`;

export const LogonForm = styled.form`
  margin-top: 100px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 32px;
    margin-bottom: 32px;
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: filter 0.2s;

    &:hover {
      opacity: 0.8;
    }

    svg {
      color: #e02041;
      margin-right: 10px;
    }
  }
`;
