import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Header } from 'semantic-ui-react'
import styled from 'styled-components'

import Container from '../../../components/Container'
import Hero from './Hero'
import RecipeMenuBar from './MenuBar'

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

const DessertRecipe = ({ recipename, src, link }) => (
  <Grid.Column style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center' }}>
    <Link to={`/recipes/${link}`}>
      <HoverPic src={src} />
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
      <DessertRecipe
        link="bananabread"
        recipename="Coconut Flour Banana Bread"
        src="https://images.unsplash.com/photo-1569762404472-026308ba6b64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
      />

      <DessertRecipe
        link="dessert2"
        recipename="Dessert2"
        src="https://images.unsplash.com/photo-1535473895227-bdecb20fb157?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />

      <DessertRecipe
        link="dessert3"
        recipename="Dessert3"
        src="https://images.unsplash.com/photo-1559852925-a9b83b8387d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
      <DessertRecipe
        link="dessert3"
        recipename="Dessert3"
        src="https://images.unsplash.com/photo-1559852925-a9b83b8387d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
      <DessertRecipe
        link="dessert3"
        recipename="Dessert3"
        src="https://images.unsplash.com/photo-1559852925-a9b83b8387d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
      <DessertRecipe
        link="dessert3"
        recipename="Dessert3"
        src="https://images.unsplash.com/photo-1559852925-a9b83b8387d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
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
