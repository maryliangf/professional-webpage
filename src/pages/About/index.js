import React, { Component } from 'react'
import { Image, Label, Grid, Header, List } from 'semantic-ui-react'
import styled from 'styled-components'

import PhiloHT from './Philo'
import TopTop from '../../components/Container'
import Hero from '../../components/Hero'
import CallitWhatYouWant from '../../assets/IMG_4980.JPG'

const IntroP = styled.div`
  b {
    font-family: 'Lato'
  }
`

class AboutPage extends Component {
  state = {
    width: window.innerWidth
  }

  updateWidth = () => this.setState({ width: window.innerWidth })

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth)
  }

  render() {
    return (
      <TopTop location={this.props.location}>
        <Hero url='https://images.unsplash.com/photo-1531730821177-61142c3583ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'>
          <Label color='black'
            as='h1'
            content="Mary Liang"
            style={{
              fontFamily: '"Courier New", Courier, monospace',
              fontSize: '1.5rem',
              fontWeight: '100',
              marginBottom: 0,
              marginTop: '0',
            }}
          />
          <br></br>
          <Label color='black'
            as='h1'
            content="ABOUT ME"
            style={{
              fontFamily: '"Courier New", Courier, monospace',
              fontSize: '1.5rem',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '0.7rem',
            }}
          />
        </Hero>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <Grid stackable centered style={{ margin: '3rem 0' }}>
            <Grid.Column width={6}>
              <Image src={CallitWhatYouWant} centered floated={this.state.width > 767 ? 'right' : null} size='medium' />
            </Grid.Column>
            <Grid.Column width={10}>
              <IntroP style={{ maxWidth: '37rem', margin: 'auto' }}>
                <Header style={{ letterSpacing: '0.3rem' }}>MEET MARY</Header>
                <br />
                Hi and welcome to my page!
                <br />
                <br />
                My name is <b>Mary</b> and I am currently a dietetic intern at University of California, San Francisco Medical Center (UCSF).
                <br />
                <br />
                Though I was born and raised in the <b>Dominican Republic</b>, my parents are immigrants from <b>China</b>. I then moved to the <b>United States</b> to complete my undergraduate degree in <b>Boston, MA</b> and am currently based in <b>San Francisco, CA</b>.
              <br />
                <br />
                I am very passionate about helping others become healthier versions of themselves, especially to prevent chronic diseases through evidence-based medical nutrition therapy. My upbringing in a family that values health and watching my own mother struggle with genetic nutritional conditions have shaped my love for nutrition. As a dietetic intern, I hope to become a <b>Registered Dietitian</b> and an expert at providing medical nutrition therapy for a wide demographics that encompasses diverse cultures, ethnicities, and socioeconomic backgrounds.
                <br />
                <br />
                I also enjoy cooking, traveling, doing yoga, being outdoors, and learning coding.
              </IntroP>
            </Grid.Column>
          </Grid>

          <div
            style={{
              borderBottom: '2px solid black',
              width: '15rem',
              margin: '0 auto'
            }}>
          </div>

          <div
            style={{
              fontSize: '1.7rem',
              fontFamily: 'lato',
              fontWeight: 'bold',
              letterSpacing: '0.5rem',
              textAlign: 'center',
              marginTop: '5rem',
            }}>
            MY WORK PHILOSOPHY
</div>

          <Grid centered>
            <IntroP style={{ margin: '2rem 15rem' }}>

              <p>
                I firmly believe in <b>disease prevention and management through nutrition</b>. This is why I want to make a long-lasting difference in the field of dietetics by helping people improve health outcomes by providing <b>medical nutrition therapy through evidence-based practice</b>. I am also passionate about providing this type of therapy to a wide breathe of demographics that includes a variety of cultures, ethnicities, and socioeconomic backgrounds.
           <br />
                <br />
                I am <b>focused, driven, and detail-oriented</b>, which are qualities that serve me well in clinical practice as an RD-to-be. I easily feel sympathy with others and am committed in actively helping others while they seek help, or at least offer my help.
           <br />
                <br />
                I recognize that there is not one glove that fits all and believe that <b>individualization </b>is key to a well-rounded approach to a solution, whether it is for a workshop, a project, or nutrition interventions.
              <br />
                <br />
                As a current dietetic intern and a human-being in the world, I recognize that there is always room for improvement and thus always try to look for ways in which I can grow and better myself. I believe that there is always something good that comes from failure and also believe in the importance of learning from past experiences and thus am always <b>open for feedback</b>.
              <br />
                <br />
                I have seen, from my prior and current experiences, that <b>hard work</b> is key to success and always strive in putting all my dedication, thoroughness, and thought in whatever I am working on.
            </p>
              <br />
              <br />
              <br />
            </IntroP>
            {/* <Grid.Column width={8}>
              <PhiloHT left
                title="PHILOSOPHY 1"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui arcu, scelerisque non elit nec, lacinia vestibulum quam. Phasellus sed mattis magna. Integer mattis quis nisi sit amet facilisis. Integer vitae neque vel nisl volutpat varius nec ac ex."
              />
            </Grid.Column>

            <Grid.Column width={8}>
              <PhiloHT
                title="PHILOSOPHY 2"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui arcu, scelerisque non elit nec, lacinia vestibulum quam. Phasellus sed mattis magna. Integer mattis quis nisi sit amet facilisis. Integer vitae neque vel nisl volutpat varius nec ac ex."
              />
              <br />

            </Grid.Column>
          </Grid>

          <Grid centered
            style={{ margin: '2rem 15rem' }}>

            <Grid.Column width={8}>
              <PhiloHT left
                title="PHILOSOPHY 3"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui arcu, scelerisque non elit nec, lacinia vestibulum quam. Phasellus sed mattis magna. Integer mattis quis nisi sit amet facilisis. Integer vitae neque vel nisl volutpat varius nec ac ex."
              />
            </Grid.Column>

            <Grid.Column width={8}>
              <PhiloHT
                title="PHILOSOPHY 4"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui arcu, scelerisque non elit nec, lacinia vestibulum quam. Phasellus sed mattis magna. Integer mattis quis nisi sit amet facilisis. Integer vitae neque vel nisl volutpat varius nec ac ex."
              />
              <br />

            </Grid.Column> */}
            {/* </Grid>

          <Grid centered
            style={{ margin: '2rem 15rem' }}>

            <Grid.Column width={8}>
              <PhiloHT left
                title="PHILOSOPHY 5"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui arcu, scelerisque non elit nec, lacinia vestibulum quam. Phasellus sed mattis magna. Integer mattis quis nisi sit amet facilisis. Integer vitae neque vel nisl volutpat varius nec ac ex."
              />
            </Grid.Column>

            <Grid.Column width={8}>
              <PhiloHT
                title="PHILOSOPHY 6"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui arcu, scelerisque non elit nec, lacinia vestibulum quam. Phasellus sed mattis magna. Integer mattis quis nisi sit amet facilisis. Integer vitae neque vel nisl volutpat varius nec ac ex."
              />
              <br />

            </Grid.Column> */}
          </Grid>

          <div
            style={{
              borderBottom: '2px solid black',
              width: '15rem',
              margin: '0 auto'
            }}>
          </div>

          <div
            style={{
              fontSize: '1.7rem',
              fontFamily: 'lato',
              fontWeight: 'bold',
              letterSpacing: '0.5rem',
              textAlign: 'center',
              marginTop: '5rem',
            }}>
            MY CAREER GOALS
</div>

          <Grid centered
            style={{ margin: '3rem 15rem' }}>

            <Grid.Column width={8}>
              <PhiloHT
                title="SHORT TERM">
                <List relaxed>
                  <List.Item>Practice medical nutrition therapy as an evidence-based practice for a wide demographic through meaningful, empathetic patient care in the inpatient setting </List.Item>
                  <List.Item>Successfully complete my dietetic internship at UCSF Medical Center</List.Item>
                  <List.Item>Obtain my Registered Dietitian (RD) certification</List.Item>
                  <List.Item>Work as a per diem inpatient clinical dietitian at UCSF Medical Center</List.Item>
                </List>
              </PhiloHT>
            </Grid.Column>

            <Grid.Column width={8}>
              <PhiloHT
                title="LONG TERM">
                <List relaxed>
                  <List.Item>Attain a Masters in Science for Nutrition</List.Item>
                  <List.Item>Obtain specialized certification as a Certified Nutrition Support Clinician</List.Item>
                  <List.Item>Make a difference helping patients improve health outcomes by providing exceptional care and education with medical nutrition therapy and evidenced-based practice at a teaching hospital</List.Item>
                  <List.Item>Continue evidence-based practice throughout my career through clinical practice and staying current on research</List.Item>
                </List>
              </PhiloHT>
              <br />

            </Grid.Column>
          </Grid>

        </div>
      </TopTop >
    )
  }
}

export default AboutPage