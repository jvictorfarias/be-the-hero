import styled from 'styled-components';

const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
  type: props.type,
}))`
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  margin: 2px 0;
  padding: 0 24px;

  & + input:last-child {
    margin-left: 6px;
  }
`;

export default Input;
