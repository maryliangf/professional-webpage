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
    <SectionHeader><b>Case Study:</b> Enteral Nutrition Management <br />During Prone Ventilation</SectionHeader>
    <Date>June 18, 2019</Date>
    <SubHeader>Project Goals</SubHeader>
    <SectionContainer>
      <P>The goal was to deliver a professional presentation synthesizing the nutritional care that I directly provided to a patient by reviewing and evaluating pertinent evidence-based guidelines and emerging scientific research to inform further application in dietetics practice.</P>
      <P>For my case study, I chose a patient with a diagnosis of presumed sarcoidosis during their admission, who was later found to have anti-melanoma differentiation-associated gene 5 (anti-MDA5) amyopathic dermatomyositis requiring prone ventilation.</P>
    </SectionContainer>
    <SubHeader>The Process</SubHeader>
    <ol>
      <li><P>Select a patient of interest.</P></li>
      <li><P>Provide comprehensive nutrition care through data collection, assessment, nutrition diagnosis, nutrition intervention, monitoring, and evaluation.</P></li>
      <li><P>Review current protocols, best practices, resources and literature related to nutritional care of patient’s condition.</P></li>
      <li><P>Evaluate nutrition care and conclude practical applications for UCSF's nutrition department and overall dietetics practice.</P></li>
      <li><P>Design and conduct a presentation to a target audience of primarily clinical nutrition professionals.</P></li>
    </ol>
    <SubHeader>The Result</SubHeader>
    <Project size={101} folderName='project0' imageName='EN Management during Prone Ventilation_Presentation.Mary Liang-' />
    <SubHeader>Final Thoughts</SubHeader>
    <SectionContainer>
      <P>My case study presentation was <i>one of the most memorable parts of my dietetic internship</i>. It is the representation of the zenith of the clinical knowledge and judgment I was developing throughout my internship rotations. This was supported by innumerable hours of research of evidence-based practice, as well as the integration and cooperation of the healthcare team to carry out patient-centered care.</P>
    </SectionContainer>
    <Divider />

    <SectionHeader><b>Business Plan:</b> Nourish Bay Café</SectionHeader>
    <Date>November 2018 - December 2018</Date>
    <SubHeader>Project Goals</SubHeader>
    <SectionContainer>
      <P>The goal of the project was to develop a business model plan designing a retail concept with paid meal services for infusion patients as part of the expansion of the new UCSF Bakar Precision Cancer Medicine Building from the Equator Café at UCSF Mission Bay Hospital. The purpose of our business model was to increase patient access to and to invigorate interest in food from UCSF dining services..</P>
    </SectionContainer>
    <SubHeader>The Process</SubHeader>
    <ol>
      <li><P>Perform a needs assessment for the new infusion patients, who will be the customers.</P></li>
      <li><P>Formulate healthy, fresh, and nutritionally sound menu choices and develop the services that meet the needs of customers, are feasible and generate revenue.</P></li>
      <li><P>Conduct a market analysis to find competitors by location, concept, and price.</P></li>
      <li><P>Establish marketing and sales strategies for success. </P></li>
      <li><P>Create a sales and profit forecast that takes into account fixed costs, variable costs, desired sales, labor needs, and annual revenue patterns.</P></li>
      <li><P>Present business plan model to UCSF’s food service management team.</P> </li>
    </ol>
    <SubHeader>The Result</SubHeader>
    <Project size={9} folderName='project1' imageName='Business Plan Presentation-' />
    <SubHeader>Final Thoughts</SubHeader>
    <SectionContainer>
      <P>This business plan proposal was a challenging yet fun experience filled with learning opportunities. Working with my intern group as a team was definitely the highlight of this project, as it allowed us to share responsibilities, listen to each other's ideas, and rely on each other for support. With this project, I was able to further practice how to conduct market research, create sales and profit forecasts, as well as develop different and innovative business models that could be feasible with the current resources that the hospital and the department has.</P>
    </SectionContainer>
    <Divider />
  </>

)
