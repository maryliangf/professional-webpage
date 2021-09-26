import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const ExpImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 200px;
  border-radius: 6px;
`

const ExpHead = styled(Header)`
  margin: 2rem 0 !important;
  font-weight: 400 !important;
  text-align: center;
`

const ExpSubHead = styled(Header.Subheader)`
  margin: 1rem 0 !important;
  text-align: ${(props) => !props.title && 'center'};
  font-size: 18px;
  font-weight: 900;
`

const ExpText = styled.div`
  text-align: center;
`

const Divider = styled.div`
  border-bottom: 2px solid black;
  width: 15rem;
  margin: 6rem auto;
`

interface Props {
  title?: React.ReactNode
  subtitle: React.ReactNode
  text: React.ReactNode
  src?: string
  noDiv?: boolean
  subheadPadding?: string
}

const ExpHT = ({ title, subtitle, text, src, noDiv, subheadPadding }: Props) => (
  <>
    {src && <ExpImage src={src} />}
    {title && <ExpHead size="large" content={title} />}
    {subtitle && <ExpSubHead title={!title} subheadPadding={subheadPadding} content={subtitle} />}
    {text && <ExpText>{text}</ExpText>}
    {!noDiv && <Divider />}
  </>
)

export default ExpHT
