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
    padding: 0rem 5rem 1.5rem 2rem;
    text-align: center;
    font-family: 'Lato';
    font-size: 18px;
    font-weight: 900;
`

const ExpText = styled.div`
    padding: 0 8rem;
    text-align: center;
`

const Divider = styled.div`
    border-bottom: 2px solid black;
    width: 15rem;
    margin: 6rem auto;
`
const ExpHT = ({ title, subtitle, text, src }) => (
    <Fragment>
        <ExpImage src={src} />
        <ExpHead size='large' content={title} />
        <ExpSubHead content={subtitle} />
        <ExpText>{text}</ExpText >
        <Divider />
    </Fragment>
)


export default ExpHT




