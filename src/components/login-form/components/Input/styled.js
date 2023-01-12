import styled from 'styled-components'

const InputContainer = styled.div`
  margin: 0;
  padding: 0;
  border: ${props => props.error ? '1px solid hsl(0, 100%, 74%)' : '1px solid hsl(246, 25%, 92%)'};
  border-radius: 4px;
  width: 90%;
  height: 12%;
  position: relative;

  &:focus {
    border: ${props => props.error ? '1px solid hsl(0, 100%, 74%)' : '1px solid hsl(249, 10%, 26%)'};
  }

  input {
    box-sizing: border-box;
    padding: 0px 80px 0px 10px;
    width: 100%;
    height: 100%;
  }

  img {
    visibility: ${props => props.error ? 'visible' : 'hidden'};
    position: absolute;
    left: 87%;
    top: 22%;
  }

`

export default InputContainer
