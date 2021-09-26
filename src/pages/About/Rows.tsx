import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'
import styled from 'styled-components'

import MaryPic from '../../assets/IMG_4980.JPG'

const StyledHeader = styled(Header)`
  letter-spacing: 0.3rem !important;
  margin: ${(props) => props.list && '0 auto !important'};
  margin-bottom: ${(props) => (props.list ? '1rem !important' : '3rem !important')};
  text-decoration-line: ${(props) => props.list && 'underline'};
  width: 100%;
  text-align: ${(props) => (props.left ? 'left' : 'center')};
  @media (max-width: 425px) {
    text-align: center;
  }
`

const P = styled.p`
  font-size: 1em;
  text-align: ${(props) =>
    props.align === 'center'
      ? 'center'
      : props.align === 'right'
      ? 'right'
      : props.align === 'justify'
      ? 'justify'
      : 'left'};
`

const Center = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: ${(props) => (props.row ? 'row nowrap' : 'column nowrap')};
  justify-content: ${(props) =>
    props.justify === 'start' ? 'flex-start' : props.justify === 'end' ? 'flex-end' : 'center'};
  align-items: ${(props) => (props.align === 'start' ? 'flex-start' : props.align === 'end' ? 'flex-end' : 'center')};
  padding: ${(props) =>
    props.padding && props.lean ? '0 3rem' : props.padding && !props.lean ? '3rem 3rem' : props.lean ? '0' : '3rem 0'};
  @media (max-width: 425px) {
    padding: ${(props) => props.mobile && '0'};
  }
`

const Column = ({ children, justify, align, row, lean, padding, mobile, ...props }) => (
  <Grid.Column {...props}>
    <Center justify={justify} align={align} row={row} lean={lean} padding={padding} mobile={mobile}>
      {children}
    </Center>
  </Grid.Column>
)

const MeetRow = () => (
  <Grid.Row columns={2}>
    <Column width={7} justify="start" mobile>
      <Image src={MaryPic} rounded size="medium" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
    </Column>
    <Column justify="start" align="start" width={9}>
      <StyledHeader left>MEET MARY</StyledHeader>
      <P>
        Hello there, I&apos;m Mary! I am a <b>Registered Dietitian Nutritionist (RDN)</b> currently based in the San
        Francisco Bay Area.{' '}
      </P>
      <P>
        Of <b>Chinese</b> descent, I grew up in the tropics of the <b>Dominican Republic</b>, then moved to{' '}
        <b>Boston, MA</b> to pursue my Bachelor of Science in Nutritional Sciences, Dietetics from Boston University.
        Being the migratory bird that I am, I then moved across the country to <b>San Francisco, CA</b> to complete my
        dietetic internship at the University of California, San Francisco (UCSF) Medical Center. After finishing up my
        internship, I decided to stay in this beautiful city!
      </P>
      <P>
        I am very passionate about helping others become healthier versions of themselves through evidence-based medical
        nutrition therapy. With my diverse background and rigorous training, I hope to become a{' '}
        <b>Registered Dietitian</b> who brings <i>a unique approach to nutrition, wellness, and health</i>.
      </P>
      <P>
        Apart from my passion for nutrition, wellness, and fitness, I also enjoy cooking, traveling, practicing yoga,
        learning to code and design, as well as entertain myself with photography and fashion.
      </P>
    </Column>
  </Grid.Row>
)

const WorkRow = () => (
  <Grid.Row centered>
    <Column width={10}>
      <StyledHeader>MY WORK PHILOSOPHY</StyledHeader>
      <P align="justify">
        I firmly believe in <b>health optimization through nutrition</b>. This is why I want to make a long-lasting
        difference in my field by helping people improve health outcomes by providing medical nutrition therapy through
        evidence-based practice. I am also passionate about being able to reach to a wide breadth of demographics that
        include a variety of cultures, ethnicities, and socioeconomic backgrounds.
      </P>
      <P align="justify">
        I recognize that there is not one glove that fits all and believe that <b>individualization </b>is key to a
        well-rounded approach to a solution, whether it is for a workshop, a project, or nutrition interventions.
      </P>
    </Column>
  </Grid.Row>
)

const GoalsRow = () => (
  <Grid.Row centered style={{ padding: '3rem 0' }}>
    <Column width={16} lean>
      <StyledHeader>MY SKILL SET</StyledHeader>
    </Column>
    <Column width={7} lean justify="start" align="center" padding>
      <StyledHeader as="h5" list>
        MY COMPETENCIES
      </StyledHeader>
      <P align="center">Medical Nutrition Therapy </P>
      <P align="center">Nutrition Education and Counseling </P>
      <P align="center">Foodservice Systems Management Principles</P>
      <P align="center">Recipe Analysis and Development</P>
      <P align="center">Menu Review and Analysis</P>
      <P align="center">Project Management and Execution</P>
      <P align="center">Data Analysis and Presentation</P>
      <P align="center">Public Speaking</P>
      <P align="center">Spanish Verbal and Written Translation </P>
      <P align="center">CPSP Nutrition Services</P>
      <P align="center">Breastfeeding Support and Education </P>
      <P align="center">Clinical Reports Creation and Interpreation</P>
    </Column>
    <Column width={7} lean justify="start" align="center" padding>
      <StyledHeader as="h5" list>
        MY QUALITIES
      </StyledHeader>
      <P align="center">Highly focused, disciplined, and motivated self-starter with strong work ethic</P>
      <P align="center">Effective and active listener with excellent written and verbal communication skills</P>
      <P align="center">
        Proactive and detail-oriented problem-solver with strategic, independent, and critical thinking
      </P>
      <P align="center">
        Genuinely dependable and committed to personal and team growth through hard work and team collaboration
      </P>
      <P align="center">Adapt flexibly to new situations and environments, as well as shifting priorities</P>
      <P align="center">Always happy and open to learn new things and find ways to better and improve my skills</P>
      <P align="center">Manage time effecitvely, leading to improved efficiency and productivity</P>
    </Column>
  </Grid.Row>
)

export { GoalsRow, MeetRow, WorkRow }
