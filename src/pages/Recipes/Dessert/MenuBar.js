import React from 'react'
import { useLocation } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { Menu, Rail, Ref, Sticky } from 'semantic-ui-react'

const RecipeMenuBar = () => {
  const contextRef = React.useRef()

  const location = useLocation()

  return (
    <Ref innerRef={contextRef}>
      <Rail position="left" internal close>
        <Sticky context={contextRef} offset={160}>
          <Menu text vertical>
            <Menu.Item header>RECIPES by course</Menu.Item>
            <Link to="/recipes/dessert">
              <Menu.Item name="Dessert" active={location.pathname === '/recipes/dessert'} />
            </Link>
            <Link to="/recipes/entree">
              <Menu.Item name="Entrée" active={location.pathname === '/recipes/entree'} />
            </Link>
            <Link to="/recipes/snack">
              <Menu.Item name="Snack" active={location.pathname === '/recipes/snack'} />
            </Link>
          </Menu>
        </Sticky>
      </Rail>
    </Ref>
  )
}

export default RecipeMenuBar
