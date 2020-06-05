import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import styled from 'styled-components'

import RECIPES from '../../../assets/recipes'
import Container from '../../../components/Container'
import Hero from '../Dessert/Hero'
import RecipeMenuBar from '../MenuBar'
import RecipeComponent from './Component'

const StyledGrid = styled(Grid)`
  margin: 1rem !important;
  margin-bottom: 8rem !important;
  @media (max-width: 425px) {
    padding: 0 !important;
  }
`

const RecipePage = () => {
  const { recipeId } = useParams()

  const recipe = RECIPES.find((r) => r.id === recipeId)

  if (!recipe) return <Redirect to="/recipes" />
  return (
    <Container>
      <Hero />
      <StyledGrid centered>
        <Grid.Column width={3} only="computer">
          <RecipeMenuBar />
        </Grid.Column>
        <Grid.Column width={10}>
          <RecipeComponent recipe={recipe} />
        </Grid.Column>
        <Grid.Column width={3} only="computer">
          <p>Mary Bio Here</p>
        </Grid.Column>
      </StyledGrid>
    </Container>
  )
}

export default RecipePage
