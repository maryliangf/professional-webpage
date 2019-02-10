import React from 'react'
import { Container } from 'semantic-ui-react'

const Hero = ({ children, url }) => (
    <Container
        textAlign='center'
        fluid
        style={{
            background: `url(${url})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            padding: '3rem',
            height: '600px',
            boxSizing: 'border-box',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        {children}
    </Container>
)

export default Hero

