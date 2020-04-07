import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;
  margin-right: 80px;

  a {
    margin-top: 0;
    margin-left: auto;

    button {
      width: 260px;
    }
  }

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  & > button {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;

    &:hover {
      border-color: #999;
    }
  }
`;

export const CaseList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;

  li {
    background: ${({ theme }) => theme.foreground};
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);

    padding: 24px;
    border-radius: 8px;
    position: relative;

    button {
      background: transparent;
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }

    strong {
      display: block;
      margin-bottom: 16px;
      color: ${({ theme }) => theme.link};

      &:not(:first-child) {
        margin-top: 32px;
      }
    }

    p {
      color: ${({ theme }) => theme.text};
      line-height: 21px;
      font-size: 16px;
    }
  }
`;
