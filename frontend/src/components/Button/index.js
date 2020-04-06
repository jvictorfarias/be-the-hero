import styled from 'styled-components';

const Button = styled.button.attrs({
  type: 'submit',
})`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 10px;
  color: #fff;
  margin-top: 5px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;

export default Button;
