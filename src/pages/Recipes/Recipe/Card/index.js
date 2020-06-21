import React from 'react'
import styled from 'styled-components'

import CardBody from './Body'
import CardHeader from './Header'

const StyledCard = styled.div`
  border: 3px solid rgb(51, 204, 204);
  border-radius: 3px;
  width: 90%;
  display: flex;
  flex-flow: column;
`

const RecipeCard = ({ recipe }) => {
  return (
    <StyledCard>
      <CardHeader recipe={recipe} />
      <CardBody recipe={recipe} />
    </StyledCard>
  )
}

export default RecipeCard
