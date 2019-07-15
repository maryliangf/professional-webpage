import React from 'react'
import { Form, Message, Button } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  border: 2px solid black !important;
  border-radius: 0 !important;
  font-size: 14px !important;
  &&&&&&:hover {
    background: black !important;
    color: white !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
`

const SubmitRow = styled.div`
  padding-top: 2rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const FormComponent = ({ state, onSubmit, handleChange }) => <div style={{ maxWidth: '550px', margin: 'auto' }}>
  <Form
    success={state.success}
    onSubmit={onSubmit}
  >
    <Message success header='Message Sent'
      content='Your message has been received.'
    />
    <Form.Group widths={2}>
      <Form.Input name='fName' label='First name' value={state.fName} onChange={handleChange} />
      <Form.Input name='lName' label='Last name' value={state.lName} onChange={handleChange} />
    </Form.Group>
    <Form.Input name='email' label='Email Address' value={state.email} onChange={handleChange} />
    <Form.TextArea name='message' label='Message' value={state.message} onChange={handleChange} />
    <SubmitRow>
      <StyledButton type='submit' basic color='black' size='large'>SUBMIT</StyledButton>
    </SubmitRow>
  </Form>
</div>

export default FormComponent
