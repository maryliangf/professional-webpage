import React from 'react'
import styled from 'styled-components'

import CardBody from './Body'
import CardFooter from './Footer'
import CardHeader from './Header'

const StyledCard = styled.div`
  border: 3px solid rgb(32, 178, 170);
  border-radius: 3px;
  width: 100%;
  display: flex;
  flex-flow: column;
`

const RecipeCard = ({ recipe }) => {
  return (
    <StyledCard>
      <CardHeader recipe={recipe} />
      <CardBody recipe={recipe} />
      <CardFooter recipe={recipe} />
    </StyledCard>
  )
}

export default RecipeCard
