import styled from 'styled-components'

export const Button = styled.button<{ disabled?: boolean }>`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 25px;
  border-radius: 6px;
  background-color: #da6060;
  color: #ffffff;
  cursor: pointer;
  user-select: none;

  ${({ disabled }) =>
    disabled
      ? `
    opacity: 0.5;
    pointer-events: none;
  `
      : ''}
`
