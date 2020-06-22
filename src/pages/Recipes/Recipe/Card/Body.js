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
      flex: 1 1 50%;
    }
  }

  .row {
    display: flex;
    flex-flow: row wrap;
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
        &:not(:last-child) {
          margin-bottom: 1.3rem;
        }
      }
    }

    ul {
      li:not(:last-child) {
        margin-bottom: 0.8rem;
      }
    }

    &.notes {
      ul {
        padding: 1rem;
        padding-left: 2.5rem;
        background-color: lightgray;
        border-radius: 3px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 1rem;

    .ingredients {
      & > .section {
        flex-basis: auto;

        &:not(:last-child) {
          margin-bottom: 1.5rem;
        }
      }
    }
  }
`

const CardBody = ({ recipe }) => {
  return (
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
          <div className="section notes">
            <h2>NOTES</h2>
            <ul>
              {recipe.notes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </StyledBody>
  )
}

export default CardBody
