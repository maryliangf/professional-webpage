import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import RECIPES from '../../assets/recipes'

const Suggestion = styled.div`
  & > p {
    padding: 4rem 0 1rem 0;
    font-size: 40px;
    font-weight: 400;
    text-align: left;
  }

  & > .recs {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    & > *:nth-child(odd) {
      margin-right: 6%;
    }
  }

  @media screen and (max-width: 450px) {
    & > .recs {
      flex-flow: column;
      & > *:nth-child(odd) {
        margin-right: 0;
      }
    }
    & > p {
      font-size: 26px;
    }
  }
`

const RecipeRecsStyle = styled.div`
  width: 47%;
  display: flex;
  align-items: center;
  padding-bottom: 2.5rem;
  margin-bottom: 2.5rem;
  border-bottom: 2.5px solid black;

  .imagerec {
    object-fit: cover;
    width: 170px;
    height: 170px;
    &:hover {
      opacity: 0.7;
    }
  }
  .titlerec {
    font-size: 22px;
    font-weight: 600;
    margin-left: 2rem;
  }

  @media screen and (max-width: 1200px) {
    flex-flow: column;
    padding-bottom: 2rem;
    margin-bottom: 3rem;
    align-items: flex-start;
    .titlerec {
      margin-left: 0;
      font-size: 18px;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    align-items: center;
  }
`

const RecipeRecs = ({ recipename, src, link }) => (
  <RecipeRecsStyle>
    <Link to={`/recipes/desserts/${link}`}>
      <img className="imagerec" src={src} />
    </Link>
    <p className="titlerec">{recipename}</p>
  </RecipeRecsStyle>
)

const RecipeSuggestion = ({ recipe }) => {
  // Search tags
  let recommendedRecipes = RECIPES.filter((r) => {
    if (recipe.id === r.id) return false
    const intersection = recipe.tags.filter((x) => r.tags.includes(x))
    if (intersection.length > 1) {
      return true
    }
    return false
  }).slice(0, 4)

  // Search within same category
  if (recommendedRecipes.length < 4) {
    const s = 4 - recommendedRecipes.length
    const categoryRecipes = RECIPES.filter((r) => {
      // Check if not the same recipe as page
      if (recipe.id === r.id) return false
      // Check if not already a recommended recipe
      if (recommendedRecipes.find((rr) => rr.id === r.id)) {
        return false
      }
      // Filter out recipes from different categories
      return r.category === recipe.category
    }).slice(0, s)

    recommendedRecipes = [...recommendedRecipes, ...categoryRecipes]
  }

  return (
    <Suggestion>
      <p>If you love this recipe...</p>
      <div className="recs">
        {recommendedRecipes.map((recommended) => (
          <RecipeRecs
            key={recommended.id}
            recipename={recommended.name}
            link={recommended.id}
            src={recommended.thumbnail}
            size="230px"
          />
        ))}
      </div>
    </Suggestion>
  )
}

export default RecipeSuggestion
