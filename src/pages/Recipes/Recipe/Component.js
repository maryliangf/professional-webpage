import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import styled from 'styled-components'

import RecipeCard from './Card'
import RecipeSuggestion from './Suggestion'

const Name = styled.h1`
  font-size: 3rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  /* padding-top: 3.5rem; */
  text-align: center;
  @media screen and (max-width: 480px) {
    padding-top: 0;
    font-size: 2rem;
  }
`

const Info = styled.p`
  padding: 0 4rem;
  text-align: left;
  font-style: italic;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`

const RecipeComponent = ({ recipe }) => {
  return (
    <>
      <Name>{recipe.name}</Name>
      <Info>{recipe.text}</Info>
      <Image src={recipe.thumbnail} style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }} centered />
      <Grid columns={3} padded>
        {recipe.images.map((img, i) => (
          <Grid.Column key={i} textAlign="center">
            <Image
              src={img.link}
              size="medium"
              centered
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <p style={{ fontStyle: 'italic' }}>{img.text}</p>
            <br />
          </Grid.Column>
        ))}
      </Grid>
      <RecipeCard recipe={recipe} />
      <RecipeSuggestion recipe={recipe} />
    </>
  )
}

export default RecipeComponent
