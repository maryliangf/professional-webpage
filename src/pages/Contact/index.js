import React, { Component } from 'react'
import { Label, Form, Button, Message } from 'semantic-ui-react'
import styled from 'styled-components'

import Hero from '../../components/Hero'
import TopTop from '../../components/Container'
import BGContact1 from '../../assets/BGContact1.png'

import MessageText from './Message'
import ContactInfo from './Info'

const StyledButton = styled(Button)`
  border: 2px solid black !important;
  &&&&&&:hover {
    background: black !important;
    color: white !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
`

const Divider = styled.div`
  border-bottom: 2px solid black;
  width: 15rem;
  margin: 5rem auto;
`

const SubmitRow = styled.div`
  padding-top: 2rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const formInitialValues = {
  fName: '',
  lName: '',
  email: '',
  message: '',
}

class ContactPage extends Component {
  state = {
    ...formInitialValues,
    success: false
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  onSubmit = () => {
    const { success, ...values } = this.state
    fetch('https://us-central1-mary-portfolio.cloudfunctions.net/sendMail', {
      method: 'post',
      body: JSON.stringify({ ...values }),
      headers: {
        'Accept': 'application/json',
      }
    })
      .then(res => this.setState({ success: true }))
  }

  render() {
    return (
      <TopTop location={this.props.location}>
        <Hero url={BGContact1}>
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
            content="CONTACT ME"
            style={{
              fontFamily: '"Courier New", Courier, monospace',
              fontSize: '1.5em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '0.7em',
            }}
          />
        </Hero>
        <MessageText />
        <ContactInfo />
        <Divider />
        <Form
          style={{ margin: '0 20rem' }}
          success={this.state.success}
          onSubmit={this.onSubmit}
        >
          <Message success header='Message Sent'
            content='Your message has been received.'
          />
          <Form.Group unstackable widths={2}>
            <Form.Input name='fName' label='First name' value={this.state.fName} onChange={this.handleChange} />
            <Form.Input name='lName' label='Last name' value={this.state.lName} onChange={this.handleChange} />
          </Form.Group>
          <Form.Input name='email' label='Email Address' value={this.state.email} onChange={this.handleChange} />
          <Form.TextArea name='message' label='Message' value={this.state.message} onChange={this.handleChange} />
          <SubmitRow>
            <StyledButton type='submit' basic color='black' size='large' style={{ borderRadius: '0', fontSize: '14px' }}>
              SUBMIT
            </StyledButton>
          </SubmitRow>
        </Form>
      </TopTop >
    )
  }
}

export default ContactPage