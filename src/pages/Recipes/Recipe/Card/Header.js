import React from 'react'
import styled from 'styled-components'

import { authors } from '../../../../assets/authors'

const StyledHeader = styled.div`
  background-color: rgb(51, 204, 204);
  padding: 3rem;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  flex-flow: column;

  .meta {
    display: flex;
    justify-content: space-between;
    .thumbnail {
      height: 150px;
      width: 150px;
      object-fit: cover;
      border-radius: 4px;
    }

    .info {
      flex: 1 1 auto;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      font-weight: 150;
      padding-right: 2rem;

      .author {
        padding-top: 1rem;
        padding-left: 1rem;
        font-weight: 450;
        font-size: 1.5rem;
        align-self: flex-start;
      }

      .name {
        font-size: 2rem;
        font-weight: 300;
        padding-bottom: 1rem;
        padding-right: 2rem;
        margin: 0;
      }
      p {
        margin: 0;
      }
    }
  }

  .tablerow {
    display: flex;
    border: 2px solid #fff;
    margin-top: 2rem;

    .item {
      padding: 1rem;
      flex: 1 1 auto;

      h4 {
        margin-bottom: 0;
        font-weight: normal;
      }

      &:not(:last-child) {
        border-right: 2px solid #fff;
      }
    }
  }
`

const CardHeader = ({ recipe }) => {
  const author = authors[recipe.author]
  return (
    <StyledHeader>
      <div className="meta">
        <div className="info">
          <h1 className="name">{recipe.name}</h1>
          <p>{recipe.info}</p>
          <p className="author">
            Author: {author.name}
            <a
              href={author.instagram[0].link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ paddingLeft: '0.5rem' }}
            >
              {author.instagram[0].handle}
            </a>
          </p>
        </div>
        <img className="thumbnail" src={recipe.thumbnail} />
      </div>
      <div className="tablerow">
        <div className="item">
          <h4>PREP TIME</h4>
          <p>{recipe.prepTime || '0 min'}</p>
        </div>
        <div className="item">
          <h4>COOK TIME</h4>
          <p>{recipe.cookTime || '0 min'}</p>
        </div>
        <div className="item">
          <h4>TOTAL TIME</h4>
          <p>{recipe.totalTime || '0 min'}</p>
        </div>
      </div>
    </StyledHeader>
  )
}

export default CardHeader
