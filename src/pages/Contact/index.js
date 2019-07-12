import React, { Component } from 'react'
import { Label, Form, Button, Message } from 'semantic-ui-react'
import styled from 'styled-components'

import Hero from '../../components/Hero'
import TopTop from '../../components/Container'
import BGContact1 from '../../assets/BGContact1.png'

const MyBellyButton = styled(Button)`
  border: 2px solid black !important;
  &&&&&&:hover {
    background: black !important;
    color: white !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
`

class ContactPage extends Component {


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

                <div
                    style={{
                        paddingTop: '7rem',
                        textAlign: 'center',
                        letterSpacing: '0.3rem',
                        fontWeight: 'bold',
                        fontFamily: 'Lato',
                        fontSize: '1.5rem'
                    }}>
                    Thank you for visiting my page.
                </div>
                <br />
                <div
                    style={{
                        textAlign: 'center',
                        fontFamily: 'Lato',
                        fontSize: '1.2rem',
                    }}>
                    Whether you have questions or comments, I would love to hear from you!
                </div>
                <div
                    style={{
                        margin: '2.5rem auto',
                        padding: '2rem 2rem',
                        width: '24rem',
                        border: '2px solid black',
                        borderRadius: '3px'
                    }}>
                    <p
                        style={{
                            margin: '0',
                            paddingBottom: '1rem',
                            textAlign: 'center',
                            letterSpacing: '0.2rem',
                            fontWeight: 'bold',
                            fontFamily: 'Lato',
                            fontSize: '1.5rem'
                        }}>
                        Mary Liang
                </p>

                    <p
                        style={{
                            margin: '0',
                            textAlign: 'center',
                            fontFamily: 'Lato',
                            fontSize: '1.2rem',
                            paddingBottom: '0.6rem'
                        }}>
                        maryliangf@gmail.com
                    <br />
                    </p>
                    <p
                        style={{
                            margin: '0',
                            textAlign: 'center',
                            fontFamily: 'Lato',
                            fontSize: '1.2rem',
                        }}>
                        (617) - 869 - 6808
                </p>
                </div>

                <div
                    style={{
                        borderBottom: '2px solid black',
                        width: '15rem',
                        margin: '5rem auto'
                    }}>
                </div>


                <Form
                    style={{ margin: '0 20rem' }}>
                    <Form.Group unstackable widths={2}>
                        <Form.Input label='First name' />
                        <Form.Input label='Last name' />
                    </Form.Group>
                    <Form.Field>
                        <label>Email Address</label>
                        <input />
                    </Form.Field>
                    <Form.TextArea label='Message' />

                    <div
                        style={{
                            paddingTop: '2rem',
                            paddingBottom: '5rem',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                        <MyBellyButton basic color='black' size='large' style={{ borderRadius: '0', fontSize: '14px' }}>
                            SUBMIT
                     </MyBellyButton>
                    </div>
                    <Message success header='Form Completed' content="You're all signed up for the newsletter" />
                </Form>


            </TopTop >
        )
    }
}

export default ContactPage