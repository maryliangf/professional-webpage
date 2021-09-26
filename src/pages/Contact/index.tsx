import React, { useState } from 'react'
import styled from 'styled-components'

import Container from '../../components/Container'
import Form from './Form'
import Hero from './Hero'
import MessageText from './Message'

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

const ContactPage = ({ location }) => {
  const [state, setState] = useState({
    ...formInitialValues,
    success: false,
  })

  const handleChange = (e, { name, value }) => setState({ [name]: value })

  const onSubmit = () => {
    // eslint-disable-next-line no-unused-vars
    const { success, ...values } = state
    fetch('https://us-central1-mary-portfolio.cloudfunctions.net/sendMail', {
      method: 'post',
      body: JSON.stringify({ ...values }),
      headers: {
        Accept: 'application/json',
      },
    }).then(() => setState({ success: true }))
  }

  return (
    <Container location={location}>
      <Hero />
      <div style={{ margin: '0 3rem' }}>
        <MessageText />
        <Divider />
        <Form
          {...{
            state,
            onSubmit,
            handleChange,
          }}
        />
      </div>
    </Container>
  )
}

export default ContactPage
