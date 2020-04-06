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
`;
