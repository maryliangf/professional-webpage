import React from 'react'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components'

const SectionHeader = styled(Header)`
  font-size: 2rem !important;
  font-weight: normal !important;
  text-align: center;
`

const Date = styled.p`
  text-align: center;
  font-style: italic;
`

const SubHeader = styled(Header)`
  text-transform: uppercase !important;
  letter-spacing: 0.15rem !important;
`

const SectionContainer = styled.div`
  padding: 0 1.5rem;
`

const Divider = styled.div`
  border-bottom: 2px solid black;
  width: 15rem;
  margin: 6rem auto;
`

type Section = {
  header?: React.ReactNode
  content: React.ReactNode
  noContain?: boolean
}

interface Props {
  header: React.ReactNode
  date: string
  sections: Section[]
  last?: boolean
}

const Project = ({ header, date, sections, last }: Props) => {
  return (
    <>
      <SectionHeader>{header}</SectionHeader>
      <Date>{date}</Date>
      {sections.map((section, i) => (
        <>
          {section.header && <SubHeader>{section.header}</SubHeader>}
          {!section.noContain ? <SectionContainer>{section.content}</SectionContainer> : section.content}
          {i !== sections.length ? <br /> : null}
        </>
      ))}
      {!last && <Divider />}
    </>
  )
}

export default Project
