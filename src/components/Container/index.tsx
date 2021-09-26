import React from 'react'

import DesktopContainer from './Desktop'
import { Footer } from './Footer'
import MobileContainer from './Mobile'

const Responsive = ({ children }) => {
  if (window.outerWidth <= 425) {
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
