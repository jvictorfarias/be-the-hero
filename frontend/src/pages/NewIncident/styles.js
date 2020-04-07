import styled from 'styled-components';

export const IncidentContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IncidentContent = styled.div`
  width: 100%;
  padding: 96px;
  background: ${({ theme }) => theme.foreground};
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    width: 100%;
    max-width: 380px;

    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
    }

    p {
      font-size: 18px;
      color: ${({ theme }) => theme.text};
      line-height: 32px;
    }

    a {
      display: flex;
      align-items: center;
      margin-top: 40px;
      color: ${({ theme }) => theme.link};
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
  }
`;

export const IncidentForm = styled.form`
  width: 100%;
  max-width: 450px;

  textarea {
    width: 100%;
    min-height: 140px;
    color: ${({ theme }) => theme.text};
    border-radius: 8px;
    margin: 2px 0;
    padding: 16px 24px;
    margin-top: 8px;
    resize: vertical;
  }
`;

export const IncidentButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
