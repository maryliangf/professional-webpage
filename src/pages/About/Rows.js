import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'
import styled from 'styled-components'

import MaryPic from '../../assets/IMG_4980.JPG'

const StyledHeader = styled(Header)`
  font-family: ${props => !props.list && 'Montserrat, sans-serif !important'};
  letter-spacing: 0.3rem !important;
  margin: ${props => props.list && '0 auto !important'};
  margin-bottom: ${props => props.list ? '1rem !important' : '3rem !important'};
  text-decoration-line: ${props => props.list && 'underline'};
`

const P = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  text-align: ${props => props.align === 'center' ? 'center' : props.align === 'right' ? 'right' : props.align === 'justify' ? 'justify' : 'left'};
`

const Center = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: ${props => props.row ? 'row nowrap' : 'column nowrap'};
  justify-content: ${props => props.justify === 'start' ? 'flex-start' : props.justify === 'end' ? 'flex-end' : 'center'};
  align-items: ${props => props.align === 'start' ? 'flex-start' : props.align === 'end' ? 'flex-end' : 'center'};
  padding: ${props => props.padding && props.lean ? '0 3rem' : props.padding && !props.lean ? '6rem 3rem' : props.lean ? '0' : '6rem 0'};
`

const Column = ({ children, justify, align, row, lean, padding, ...props }) => <Grid.Column {...props}>
  <Center justify={justify} align={align} row={row} lean={lean} padding={padding}>
    {children}
  </Center>
</Grid.Column>

const MeetRow = () => <Grid.Row columns={2}>
  <Column width={7} justify='start'>
    <Image src={MaryPic} rounded size='medium' style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
  </Column>
  <Column justify='start' align='start' width={9}>
    <StyledHeader>MEET MARY</StyledHeader>
    <P>Hi and welcome to my page!</P>
    <P>My name is <b>Mary</b> and I am currently a dietetic intern at University of California, San Francisco Medical Center (UCSF).</P>
    <P>Though I was born and raised in the <b>Dominican Republic</b>, my parents are immigrants from <b>China</b>. I then moved to the <b>United States</b> to complete my undergraduate degree in <b>Boston, MA</b> and am currently based in <b>San Francisco, CA</b>.</P>
    <P>I am very passionate about helping others become healthier versions of themselves, especially to prevent chronic diseases through evidence-based medical nutrition therapy. My upbringing in a family that values health and watching my own mother struggle with genetic nutritional conditions have shaped my love for nutrition. As a dietetic intern, I hope to become a <b>Registered Dietitian</b> and an expert at providing medical nutrition therapy for a wide demographics that encompasses diverse cultures, ethnicities, and socioeconomic backgrounds.</P>
    <P>I also enjoy cooking, traveling, doing yoga, being outdoors, and learning coding.</P>
  </Column>
</Grid.Row >

const WorkRow = () => <Grid.Row centered>
  <Column width={10}>
    <StyledHeader>MY WORK PHILOSOPHY</StyledHeader>
    <P align='justify'>I firmly believe in <b>disease prevention and management through nutrition</b>. This is why I want to make a long-lasting difference in the field of dietetics by helping people improve health outcomes by providing <b>medical nutrition therapy through evidence-based practice</b>. I am also passionate about providing this type of therapy to a wide breathe of demographics that includes a variety of cultures, ethnicities, and socioeconomic backgrounds.</P>
    <P align='justify'>I am <b>focused, driven, and detail-oriented</b>, which are qualities that serve me well in clinical practice as an RD-to-be. I easily feel sympathy with others and am committed in actively helping others while they seek help, or at least offer my help.</P>
    <P align='justify'>I recognize that there is not one glove that fits all and believe that <b>individualization </b>is key to a well-rounded approach to a solution, whether it is for a workshop, a project, or nutrition interventions.</P>
    <P align='justify'>As a current dietetic intern and a human-being in the world, I recognize that there is always room for improvement and thus always try to look for ways in which I can grow and better myself. I believe that there is always something good that comes from failure and also believe in the importance of learning from past experiences and thus am always <b>open for feedback</b>.</P>
    <P align='justify'>I have seen, from my prior and current experiences, that <b>hard work</b> is key to success and always strive in putting all my dedication, thoroughness, and thought in whatever I am working on.</P>
  </Column>
</Grid.Row >

const GoalsRow = () => <Grid.Row centered style={{ padding: '6rem 0' }}>
  <Column width={16} lean>
    <StyledHeader>MY CAREER GOALS</StyledHeader>
  </Column>
  <Column width={7} lean justify='start' align='start' padding>
    <StyledHeader as='h5' list>SHORT TERM</StyledHeader>
    <P>Practice medical nutrition therapy as an evidence-based practice for a wide demographic through meaningful, empathetic patient care in the inpatient setting </P>
    <P>Successfully complete my dietetic internship at UCSF Medical Center</P>
    <P>Obtain my Registered Dietitian (RD) certification</P>
    <P>Work as a per diem inpatient clinical dietitian at UCSF Medical Center</P>
  </Column>
  <Column width={7} lean justify='start' align='start' padding>
    <StyledHeader as='h5' list>LONG TERM</StyledHeader>
    <P>Attain a Masters in Science for Nutrition</P>
    <P>Obtain specialized certification as a Certified Nutrition Support Clinician</P>
    <P>Make a difference helping patients improve health outcomes by providing exceptional care and education with medical nutrition therapy and evidenced-based practice at a teaching hospital</P>
    <P>Continue evidence-based practice throughout my career through clinical practice and staying current on research</P>
  </Column>
</Grid.Row >

export { MeetRow, WorkRow, GoalsRow }
