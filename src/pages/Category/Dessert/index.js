import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Header } from 'semantic-ui-react'
import styled from 'styled-components'

import DESSERTS from '../../../assets/recipes/desserts'
import Container from '../../../components/Container'
import RecipeMenuBar from '../../Recipes/MenuBar'
import Hero from './Hero'

const StyledHeader = styled(Header)`
  letter-spacing: 0.3rem !important;
  margin: 3rem auto !important;
  width: 100%;
  text-align: center;
`
const StyledGrid = styled(Grid)`
  margin: 1rem !important;
  margin-bottom: 8rem !important;
  @media (max-width: 425px) {
    padding: 0 !important;
  }
`

const HoverPic = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;

  @media (max-width: 1200px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 990px) {
    width: 230px;
    height: 230px;
  }

  @media (max-width: 935px) {
    width: 220px;
    height: 220px;
  }

  @media (max-width: 880px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 850px) {
    width: 190px;
    height: 190px;
  }

  @media (max-width: 767px) {
    width: 300px;
    height: 300px;
  }

  &:hover {
    opacity: 0.7;
  }
`

const DessertTitle = styled.h3`
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 60px !important;

  @media (max-width: 767px) {
    margin-bottom: 20px !important;
  }
`

const DessertRecipe = ({ recipename, src, link, size }) => (
  <Grid.Column style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center' }}>
    <Link to={`/recipes/desserts/${link}`}>
      <HoverPic src={src} style={size ? { width: size, height: size } : undefined} />
    </Link>
    <DessertTitle>{recipename}</DessertTitle>
  </Grid.Column>
)

const GridDessertRecipe = () => (
  <Grid columns={3} stackable centered relaxed>
    <Grid.Row centered>
      <StyledHeader style={{ fontSize: '2.5rem' }}>EXPLORE ALL DESSERT RECIPES</StyledHeader>
    </Grid.Row>
    <Grid.Row centerd columns={3}>
      {DESSERTS.map((recipe) => (
        <DessertRecipe key={recipe.id} link={recipe.id} recipename={recipe.name} src={recipe.thumbnail} />
      ))}
    </Grid.Row>
  </Grid>
)

const DessertPage = () => (
  <Container>
    <Hero />
    <StyledGrid centered>
      <Grid.Column width={3} only="computer">
        <RecipeMenuBar />
      </Grid.Column>
      <Grid.Column width={13}>
        <GridDessertRecipe />
      </Grid.Column>
    </StyledGrid>
  </Container>
)

export default DessertPage
