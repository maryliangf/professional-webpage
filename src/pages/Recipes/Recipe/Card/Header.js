import React from 'react'
import styled from 'styled-components'

import { authors } from '../../../../assets/authors'

const StyledHeader = styled.div`
  background-color: rgb(32, 178, 170);
  padding: 3rem;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  flex-flow: column;

  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .name {
      font-size: 2.8rem;
      font-weight: 300;
      margin: 0;
      margin-right: 0.5rem;
    }

    .thumbnail {
      height: 150px;
      width: 150px;
      object-fit: cover;
      border-radius: 4px;
    }
  }

  .info {
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 150;

    p {
      margin: 0;
    }

    .description {
      font-style: italic;
    }

    .author {
      margin: 1rem 0;
      padding-left: 1rem;
      font-weight: 450;
      font-size: 1.5rem;
      align-self: flex-start;
    }
  }

  .tablerow {
    display: flex;
    border: 2px solid #fff;

    .item {
      padding: 1rem;
      flex: 1 1 auto;
      text-align: center;
      display: flex;
      flex-flow: column;
      justify-content: center;

      h4 {
        margin-bottom: 0;
        font-weight: normal;
      }

      &:not(:last-child) {
        border-right: 2px solid #fff;
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 1rem;

    .meta {
      .name {
        font-size: 1.8rem;
      }
      .thumbnail {
        width: 120px;
        height: 120px;
      }
    }

    .info {
      .author {
        font-size: 1rem;
        padding: 0;
      }
    }

    .tablerow {
      .item {
        padding: 0.5rem;
        h4,
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
`

const CardHeader = ({ recipe }) => {
  const author = authors[recipe.author]
  return (
    <StyledHeader>
      <div className="meta">
        <h1 className="name">{recipe.name}</h1>
        <img className="thumbnail" src={recipe.thumbnail} />
      </div>
      <div className="info">
        <p className="description">{recipe.info}</p>
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
