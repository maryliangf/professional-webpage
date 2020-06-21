import React from 'react'
import { Divider } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledBody = styled.div`
  padding: 3rem;

  & > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .ingredients {
    display: flex;
    flex-flow: column;

    & > .section {
      flex: 0 0 50%;
    }
  }

  .row {
    display: flex;
    flex-flow: row;
  }

  .section {
    display: flex;
    flex-flow: column;

    h2 {
      text-align: left;
      margin-bottom: 1rem;
      font-weight: 150;
    }

    ul,
    ol {
      padding-left: 1.5rem;
      margin: 0;
      font-size: 18px;
      font-weight: 250;
      li {
        text-align: left;
        margin-bottom: 1.3rem;
      }
    }

    ul {
      li {
        margin-bottom: 0.8rem;
      }
    }
  }
`

const MadeRecipe = styled.div`
  background-color: rgb(51, 204, 204);
  color: white;
  padding: 5rem 4rem 0 5rem;
  display: flex;
  justify-content: space-between;
  flex-flow: row;

  .iconthumb {
    font-size: 80px;
  }

  .body {
    margin-top: 1rem;
    font-size: 16px;
    font-weight: 200;
  }

  .heading {
    font-size: 24px;
    font-weight: 230;
    letter-spacing: 0.2rem;
  }
`

const CardBody = ({ recipe }) => {
  return (
    <>
      <StyledBody>
        <div className={`ingredients ${recipe.wetIngredients ? 'row' : ''}`}>
          {recipe.wetIngredients && (
            <div className="section">
              <h2>WET INGREDIENTS</h2>
              <ul>
                {recipe.wetIngredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="section">
            <h2>{recipe.wetIngredients ? 'DRY INGREDIENTS' : 'INGREDIENTS'}</h2>
            <ul>
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <Divider />
        <div className="section">
          <h2>INSTRUCTIONS</h2>
          <ol>
            {recipe.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
        {recipe.notes && (
          <>
            <Divider />
            <div className="section">
              <h2>NOTES</h2>
              <ul style={{ margin: '1rem 2rem', padding: '1rem 2rem 0 4rem', backgroundColor: 'lightgray' }}>
                {recipe.notes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </StyledBody>
      <MadeRecipe>
        <i className="utensils icon iconthumb"></i>
        <div style={{ marginTop: '-2rem' }}>
          <div className="heading">DID YOU MAKE THIS RECIPE?</div>
          <div className="body">
            {' '}
            Tag
            <a href="https://www.instagram.com/naturallyfoodie">
              <b> @naturallyfoodie </b>
            </a>
            on Instagram and hashtag it <b>#naturallyfoodie</b> <br /> so we can see your delicious creation!
          </div>
        </div>
      </MadeRecipe>
    </>
  )
}

export default CardBody
