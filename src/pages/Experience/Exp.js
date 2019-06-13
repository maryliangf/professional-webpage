import React, { Fragment } from 'react'
import { Header, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const ExpImage = styled(Image)`
    object-fit: cover;
    width: 100%;
    height: 200px;
    border-radius: 6px;
`

const ExpHead = styled(Header)`
    padding: 0rem 5rem 0.5rem 2rem !important;
    font-weight: 400 !important;
    text-align: center;
`

const ExpSubHead = styled(Header.Subheader)`
    padding: 0rem 5rem ${props => props.subheadPadding || '1.5rem'} 2rem;
    text-align: center;
    font-family: 'Lato';
    font-size: 18px;
    font-weight: 900;
`

const ExpText = styled.div`
    padding: 0 8rem;
    text-align: center;
    b {
        font-family: 'Lato'
    }
`

const Divider = styled.div`
    border-bottom: 2px solid black;
    width: 15rem;
    margin: 6rem auto;
`
const ExpHT = ({ title, subtitle, text, src, noDiv, subheadPadding }) => (
    <Fragment>
        {src && <ExpImage src={src} />}
        {title && <ExpHead size='large' content={title} />}
        {subtitle && <ExpSubHead subheadPadding={subheadPadding} content={subtitle} />}
        {text && <ExpText>{text}</ExpText >}
        {!noDiv && <Divider />}
    </Fragment>
)


export default ExpHT




