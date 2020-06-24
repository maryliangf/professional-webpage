import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'

import { authors } from '../../../assets/authors'

const MadeRecipe = styled.div`
  background-color: rgb(32, 178, 170);
  color: white;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .banner {
    margin-left: 3rem;

    .heading {
      font-size: 24px;
      font-weight: 230;
      letter-spacing: 0.2rem;
      line-height: 26px;
      margin-bottom: 1rem;
      text-align: center;
    }

    .body {
      font-size: 16px;
      font-weight: 200;
      text-align: center;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 1rem;

    .banner {
      margin-left: 1rem;
      .heading {
        font-size: 16px;
        margin: 0;
      }
      .body {
        font-size: 14px;
      }
    }
  }
`
const FindOnline = styled.div`
  background-color: rgb(32, 178, 170);
  font-weight: 400;
  font-size: 16px;
  justify-content: center;
  padding-bottom: 2rem;

  p {
    text-align: center;
    background-color: white;
    padding: 1rem;
    margin: 0 2rem;
  }
`

const CardFooter = ({ recipe, print }) => {
  const author = authors[recipe.author]
  return (
    <>
      <MadeRecipe>
        <Icon name="utensils" size="huge" />
        <div className="banner">
          <div className="heading">DID YOU MAKE THIS RECIPE?</div>
          <div className="body">
            Tag{' '}
            <a href={author.instagram[0].link} target="_blank" rel="noopener noreferrer">
              <b>{author.instagram[0].handle}</b>
            </a>{' '}
            on Instagram and hashtag it <b>#naturallyfoodie</b> so we can see your delicious creation!
          </div>
        </div>
      </MadeRecipe>
      {print ? (
        <FindOnline>
          <p>
            <i>
              Find it online: https://www.maryliang.com/recipes/{recipe.category}/{recipe.id}
            </i>
          </p>
        </FindOnline>
      ) : null}
    </>
  )
}

export default CardFooter
