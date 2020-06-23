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

const RecipeCard = ({ recipe, print }) => {
  return (
    <StyledCard>
      <CardHeader recipe={recipe} print={print} />
      <CardBody recipe={recipe} print={print} />
      <CardFooter recipe={recipe} print={print} />
    </StyledCard>
  )
}

export default RecipeCard
