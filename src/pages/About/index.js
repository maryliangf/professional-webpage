import React, { Component } from 'react'
import { Image, Label, Grid, Header, List } from 'semantic-ui-react'

import PhiloHT from './Philo'
import TopTop from '../../components/Container'
import Hero from '../../components/Hero'
import CallitWhatYouWant from '../../assets/IMG_4980.JPG'

class AboutPage extends Component {
  render() {
    return (
      <TopTop location={this.props.location}>
        <Hero url='https://images.unsplash.com/photo-1531730821177-61142c3583ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'>

          <Label color='black'
            as='h1'
            content="Mary Liang"
            style={{
              fontFamily: '"Courier New", Courier, monospace',
              fontSize: '1.5em',
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
              fontSize: '1.5em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '0.7em',
            }}
          />
        </Hero>

        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <Grid centered
            style={{ margin: '5rem 15rem' }}>

            <Grid.Column width={6}>
              <Image src={CallitWhatYouWant} size='medium' />
            </Grid.Column>

            <Grid.Column width={10}
              style={{ padding: '0.8rem 0', paddingLeft: '10rem' }}
            >
              <Header style={{ letterSpacing: '0.3rem' }}>
                MEET MARY
            </Header>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui arcu, scelerisque non elit nec, lacinia vestibulum quam. Phasellus sed mattis magna. Integer mattis quis nisi sit amet facilisis. Integer vitae neque vel nisl volutpat varius nec ac ex. Suspendisse vel nunc arcu. Aenean id elementum justo. In faucibus convallis dapibus. Ut eu lectus sagittis leo placerat ornare. Duis eget varius orci, a vehicula diam.
            <br />
              <br />
              Nullam eget dolor semper, imperdiet nulla id, maximus nunc. Duis euismod vehicula maximus. Morbi varius dolor vel sollicitudin egestas. Fusce risus ex, tincidunt at placerat non, fermentum eget nisi. Mauris condimentum est augue, a maximus magna auctor ac. Nulla vel quam eros. Nunc id ultricies elit. Ut quis dolor neque. Praesent id sapien tellus. Aliquam erat volutpat. Sed auctor lorem nisl, sit amet mattis dolor lobortis eget
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

          <Grid centered
            style={{ margin: '2rem 15rem' }}>

            <Grid.Column width={8}>
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

            </Grid.Column>
          </Grid>

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
            MY CAREER GOALS
</div>

          <Grid centered
            style={{ margin: '3rem 15rem' }}>

            <Grid.Column width={8}>
              <PhiloHT
                title="SHORT TERM">
                <List relaxed>
                  <List.Item>Short term career goal 1</List.Item>
                  <List.Item>Short term career goal 2</List.Item>
                  <List.Item>Short term career goal 3</List.Item>
                </List>
              </PhiloHT>
            </Grid.Column>

            <Grid.Column width={8}>
              <PhiloHT
                title="LONG TERM">
                <List relaxed>
                  <List.Item>Long term career goal 1</List.Item>
                  <List.Item>Long term career goal 2</List.Item>
                  <List.Item>Long term career goal 3</List.Item>
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