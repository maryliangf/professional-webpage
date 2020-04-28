import React from 'react'
import styled from 'styled-components'

import Container from '../../components/Container'
import Hero from './Hero'
import { Grid, Image, Header, Button } from 'semantic-ui-react'


const StyledHeader = styled(Header)`
  letter-spacing: 0.3rem !important;
  margin: ${(props) => props.list && '0 auto !important'};
  margin-bottom: ${(props) => (props.list ? '1rem !important' : '3rem !important')};
  text-decoration-line: ${(props) => props.list && 'underline'};
  width: 100%;
  text-align: ${(props) => (props.left ? 'left' : 'center')};
  
  @media (max-width: 425px) {
    text-align: center;
  }
`

const RecipesPage = ({ location }) => (
  <Container location={location}>
    <Hero />
    <GridRecipeCategories />
  </Container>
)

const RecipeImageWrapper = styled.div`
height: 40rem;

display: flex;
align-items: center;
justify-content: center;
position: relative;
&::after{content:'';
top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  position: absolute;
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
  background-image: url(${props => props.src});}
&:hover::after{
  opacity: 0.7
  }
  @media (max-width: 425px) {
    height: 18rem;
  }
`


const StyledButton = styled(Button)`
  &&&&&& {
margin: auto !important;
    border: 4px solid black !important;
    background: black !important;
    color: white !important;
    border-radius: 0 !important;
    font-size: 18px !important;
  }
  &&&&&&:hover {
    background: white !important;
    color: black !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
`

const RecipeImageButton = ({recipecategory, src}) => (
  <RecipeImageWrapper src={src}>
<StyledButton>
  {recipecategory}
</StyledButton>
  </RecipeImageWrapper>
)

const GridRecipeCategories = () => (
  <Grid stackable relaxed columns={3} style={{ padding: '8rem 8rem 12rem 8rem' }}>
    <Grid.Row centered>
        <StyledHeader style={{fontSize: '2.5rem'}}>
          EXPLORE RECIPES
        </StyledHeader>
    </Grid.Row>

    <Grid.Column>
<RecipeImageButton recipecategory='Dessert' src="https://images.unsplash.com/photo-1569762404472-026308ba6b64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
    </Grid.Column>

    <Grid.Column>
      <RecipeImageButton recipecategory='Entrée' src='https://images.unsplash.com/photo-1535473895227-bdecb20fb157?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
    </Grid.Column>

    <Grid.Column>
      <RecipeImageButton recipecategory='Snack' src='https://images.unsplash.com/photo-1559852925-a9b83b8387d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
    </Grid.Column>
  </Grid>
)

export default RecipesPage 
