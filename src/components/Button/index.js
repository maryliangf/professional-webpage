import styled from 'styled-components'

export const SquareButton = styled.button`
  border: 2px solid black;
  color: black;
  border-radius: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Lato', sans-serif;

  padding: 1rem;
  background-color: transparent;

  &:hover {
    background: black;
    color: white;
    border-radius: 0;
    box-shadow: none;
  }
`
