import React from 'react'
import styled from 'styled-components'

import CardBody from './Body'
import CardFooter from './Footer'
import CardHeader from './Header'

const StyledCard = styled.div`
  border: 3px solid rgb(32, 178, 170);
  border-radius: 3px;
  width: 100%;
  display: flex;
  flex-flow: column;
  max-width: 1024px;
  margin: auto;
`

class RecipeCard extends React.Component {
  render() {
    return (
      <StyledCard>
        <CardHeader recipe={this.props.recipe} print={this.props.print} />
        <CardBody recipe={this.props.recipe} print={this.props.print} />
        <CardFooter recipe={this.props.recipe} print={this.props.print} />
      </StyledCard>
    )
  }
}

export default RecipeCard
