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
          <Menu text vertical style={{ marginLeft: '20px' }}>
            <Menu.Item header>RECIPES by course</Menu.Item>
            <Link to="/recipes/desserts">
              <Menu.Item name="Desserts" active={location.pathname === '/recipes/desserts'} />
            </Link>
            <Link to="/recipes/entrees">
              <Menu.Item name="Entrées" active={location.pathname === '/recipes/entrees'} />
            </Link>
            <Link to="/recipes/snacks">
              <Menu.Item name="Snacks" active={location.pathname === '/recipes/snacks'} />
            </Link>
          </Menu>
        </Sticky>
      </Rail>
    </Ref>
  )
}

export default RecipeMenuBar
