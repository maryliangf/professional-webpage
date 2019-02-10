import React from 'react'
import PropTypes from 'prop-types'

import DesktopContainer from './Desktop'
import MobileContainer from './Mobile'

const ResponsiveContainer = ({ children, location }) => (
  <div>
    <DesktopContainer location={location}>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer

export const getWidth = () => {
  const isSSR = typeof window === 'undefined'
  return isSSR ? ResponsiveContainer.onlyTablet.minWidth : window.innerWidth
}