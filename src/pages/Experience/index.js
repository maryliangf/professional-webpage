import React, { Component, createRef } from 'react'
import { Grid, Rail, Sticky, Menu, Ref } from 'semantic-ui-react'
import { HashLink as Link } from 'react-router-hash-link'

import Container from '../../components/Container'

import Hero from './Hero'
import ExpList from './ExpList'


class ExperiencePage extends Component {
	state = {}

	contextRef = createRef()

	render() {
		return (
			<Container location={this.props.location}>
				<Hero />
				<div style={{ maxWidth: '1440px', margin: '4rem 2rem' }}>
					<Grid stackable centered>
						<Grid.Column width={4} only='computer'>
							<Ref innerRef={this.contextRef}>
								<Rail position='left' internal close>
									<Sticky context={this.contextRef} offset={160}>
										<Menu pointing secondary vertical>
											<Link to='/experience#Experience1'><Menu.Item name='Dietetic Internship at UCSF' /></Link>
											<Link to='/experience#Experience2'><Menu.Item name='Boston Medical Center Preventive Food Pantry' /></Link>
											<Link to='/experience#Experience3'><Menu.Item name='Spaulding Rehabilitational Hospital' /></Link>
											<Link to='/experience#Experience4'><Menu.Item name='Energy Metabolism Lab at the HNRCA' /></Link>
											<Link to='/experience#Experience5'><Menu.Item name='The Greater Boston Food Bank' /></Link>
											<Link to='/experience#Experience6'><Menu.Item name='Boston University Dining Services' /></Link>
										</Menu>
									</Sticky>
								</Rail>
							</Ref>
						</Grid.Column>
						<Grid.Column width={12}>
							<ExpList />
							{/* <div ref={this.handleContextRef}> */}
							{/* </div> */}
						</Grid.Column>
					</Grid >
				</div >
			</Container >
		)
	}
}


export default ExperiencePage
