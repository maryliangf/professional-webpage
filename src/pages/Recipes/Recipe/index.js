import React from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import { Card, Grid, Image } from 'semantic-ui-react'
import styled from 'styled-components'

import MaryPic from '../../../assets/IMG_4980.JPG'
import RECIPES from '../../../assets/recipes'
import { SquareButton } from '../../../components/Button'
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
        <Grid.Column width={3} only="computer" style={{ paddingTop: '5rem' }}>
          <Card>
            <Image src={MaryPic} wrapped ui={false} style={{ objectFit: 'cover' }} />
            <Card.Content>
              <Card.Header style={{ fontWeight: '500' }}> Hi there! </Card.Header>
              {/* <Card.Meta>Joined in 2016</Card.Meta> */}
              <Card.Description>
                <p style={{ paddingBottom: '1.5rem' }}>
                  I&apos;m Mary, a registered dietitian on a mission to guide people towards a more balanced lifestyle
                  by building habits for a sustainable, healthful eating pattern.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Link to="/aboutme">
                    <SquareButton>MEET MARY</SquareButton>
                  </Link>
                </div>
              </Card.Description>
            </Card.Content>
            {/* <Card.Content extra style={{ align: 'center' }}></Card.Content> */}
          </Card>
        </Grid.Column>
      </StyledGrid>
    </Container>
  )
}

export default RecipePage
