import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const Name = styled(Header)``

const Info = styled.p``

const RecipeComponent = ({ recipe }) => {
  return (
    <Grid columns={3} stackable centered relaxed>
      <Grid.Row centered>
        <Name>{recipe.name}</Name>
      </Grid.Row>
      <Grid.Row centered>
        <Info>{recipe.info}</Info>
      </Grid.Row>
      <Grid.Row centered>
        <Image src={recipe.thumbnail} size="medium" />
      </Grid.Row>
    </Grid>
  )
}

export default RecipeComponent
