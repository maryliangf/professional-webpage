import React from 'react'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components'

import Project from './Project'

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

const P = styled.p`
  font-size: 1.1rem !important;
  text-align: ${props => props.align === 'center' ? 'center' : props.align === 'right' ? 'right' : props.align === 'justify' ? 'justify' : 'left'};
`

const Divider = styled.div`
  border-bottom: 2px solid black;
  width: 15rem;
  margin: 6rem auto;
`

export const Prone = () => (
  <>
    <SectionHeader><b>Case Study:</b> Enteral Nutrition Management During Prone Ventilation</SectionHeader>
    <Date>June 18, 2019</Date>
    <SubHeader>Project Goals</SubHeader>
    <SectionContainer>
      <P>The goal was to conduct a professional presentation on the nutritional care provided to a patient, evaluating evidence-based guidelines and emerging scientific research for application in dietetics practice.</P>
      <P>For my case study, I chose a patient with a diagnosis of presumed sarcoidosis during their admission, who was later found to have Anti-melanoma differentiation-associated gene 5 (Anti-MDA5) amyopathic dermatomyositis requiring prone ventilation.</P>
    </SectionContainer>
    <SubHeader>The Process</SubHeader>
    <ol>
      <li><P>Select a patient of interest.</P></li>
      <li><P>Provide comprehensive nutrition care through data collection, assessment, nutrition diagnosis, nutrition intervention, monitoring, and evaluation.</P></li>
      <li><P>Review current resources and literature related to nutritional care of patient’s condition.</P></li>
      <li><P>Evaluate nutrition care and conclude practical applications for UCSF's nutrition department.</P></li>
      <li><P>Design and deliver a presentation to a target audience of primarily clinical nutrition professionals.</P></li>
    </ol>
    <SubHeader>The Result</SubHeader>
    <Project size={101} folderName='project0' imageName='EN Management during Prone Ventilation_Presentation.Mary Liang-' />
    <SubHeader>Final Thoughts</SubHeader>
    <SectionContainer>
      <P>Lorem Ipsum</P>
    </SectionContainer>
    <Divider />
  </>
)
