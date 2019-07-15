import React, { Component } from 'react'
import styled from 'styled-components'

import Container from '../../components/Container'

import Hero from './Hero'
import MessageText from './Message'
import ContactInfo from './Info'
import Form from './Form'

const Divider = styled.div`
  border-bottom: 2px solid black;
  width: 15rem;
  margin: 5rem auto;
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
      <Container location={this.props.location}>
        <Hero />
        <div style={{ margin: '0 3rem' }}>
          <MessageText />
          {/* <ContactInfo /> */}
          <Divider />
          <Form {...{ state: this.state, onSubmit: this.onSubmit, handleChange: this.handleChange }} />
        </div>
      </Container >
    )
  }
}

export default ContactPage