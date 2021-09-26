import React from 'react'
import { useWindowSize } from 'react-use'

import DesktopContainer from './Desktop'
import { Footer } from './Footer'
import MobileContainer from './Mobile'

const Responsive = ({ children }) => {
  const { width } = useWindowSize()

  if (width <= 425) {
    return (
      <MobileContainer>
        {children}
        <Footer />
      </MobileContainer>
    )
  }

  return (
    <DesktopContainer>
      {children}
      <Footer />
    </DesktopContainer>
  )
}

export default Responsive
