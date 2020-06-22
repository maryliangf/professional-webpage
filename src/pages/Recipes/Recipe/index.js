import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import RECIPES from '../../../assets/recipes'
import Container from '../../../components/Container'
import MeetMary from '../../../components/MeetMary'
import Hero from '../Dessert/Hero'
import RecipeMenuBar from '../MenuBar'
import RecipeComponent from './Component'

const RecipePage = () => {
  const { recipeId } = useParams()

  const recipe = RECIPES.find((r) => r.id === recipeId)

  if (!recipe) return <Redirect to="/recipes" />
  return (
    <Container>
      <Hero />
      <Grid padded centered style={{ padding: '5rem 1rem' }}>
        <Grid.Column computer={3} only="computer">
          <RecipeMenuBar />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={11} computer={8}>
          <RecipeComponent recipe={recipe} />
        </Grid.Column>
        <Grid.Column tablet={5} computer={5} only="tablet computer">
          <MeetMary />
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default RecipePage
