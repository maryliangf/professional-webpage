import React, { Fragment } from 'react'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components'

const PhiloHead = styled(Header)`
  text-align: center;
  text-decoration-line: underline;
  letter-spacing: 0.3rem;
  padding-right: ${props => props.left ? '3rem !important' : '0 !important'};
  padding-left: ${props => props.left ? '0 !important' : '3rem !important'};
`

const PhiloText = styled.div`
  text-align: center;
  font-size: 1.1rem;
  padding-right: ${props => props.left ? '3rem' : '0'};
  padding-left: ${props => props.left ? '0' : '3rem'};
`

const PhiloHT = ({ children, title, text, left }) => (
    <Fragment>
        <PhiloHead left={left}>
            {title}
        </PhiloHead>

        <PhiloText left={left}>
            {text}
            {children && children}
        </PhiloText >
    </Fragment>
)

export default PhiloHT


