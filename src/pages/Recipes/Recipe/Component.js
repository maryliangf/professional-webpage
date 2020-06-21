import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'
import styled from 'styled-components'

import RecipeCard from './Card'

const Name = styled(Header)`
  font-size: 45px !important;
  font-family: 'Inter' !important;
  font-weight: 450 !important;
  padding: 3.5rem 3rem 0 3rem !important;
`

const Info = styled.p`
  padding: 0 9rem;
`

const RecipeComponent = ({ recipe }) => {
  return (
    <Grid columns={3} stackable centered relaxed>
      {/* Name */}
      <Grid.Row centered>
        <Name>{recipe.name}</Name>
      </Grid.Row>
      {/* Info */}
      <Grid.Row centered>
        <Info>{recipe.info}</Info>
      </Grid.Row>
      {/* Images */}
      <Grid.Row style={{ paddingBottom: '3.5rem' }} centered>
        <Image src={recipe.thumbnail} size="medium" />
      </Grid.Row>
      {/* Receipe Card */}
      <Grid.Row>
        <RecipeCard recipe={recipe} />
      </Grid.Row>
    </Grid>
  )
}

export default RecipeComponent
