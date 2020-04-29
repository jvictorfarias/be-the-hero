import styled from 'styled-components';

export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.borderColor};
  border-radius: 30px;
  display: flex;
  font-size: 0.4rem;
  justify-content: space-between;
  margin: 20px 20px;
  overflow: hidden;
  padding: 0.5rem;
  position: absolute;
  top: 12px;
  right: 20px;
  width: 8rem;
  height: 4rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;
