import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'
import styled from 'styled-components'

import TopTop from '../../components/Container'
import Hero from '../../components/Hero'
import BGContact from '../../assets/BGContact.jpg'

class ContactPage extends Component {

    render() {
        return (
            <TopTop location={this.props.location}>
                <Hero url={BGContact}>

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
            </TopTop>
        )
    }
}

export default ContactPage