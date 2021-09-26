import React, { useState } from 'react'
import styled from 'styled-components'

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

const ContactPage = () => {
  const [state, setState] = useState<any>({
    ...formInitialValues,
    success: false,
  })

  const handleChange = (e, { name, value }) => setState({ [name]: value })

  const onSubmit = () => {
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
    <>
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
    </>
  )
}

export default ContactPage
