import React, { Component } from 'react'
import { Label, Grid, Header, Rail, Sticky, Segment } from 'semantic-ui-react'

import TopTop from '../../components/Container'
import Hero from '../../components/Hero'
import BGExperience from '../../assets/Fruitwhitegraybg.jpg'
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';

import UCSF from '../../assets/ucsf.jpg'
import ExpHT from './Exp'

class ExperiencePage extends Component {
	state = {}

	handleContextRef = contextRef => this.setState({ contextRef })

	render() {
		const { contextRef } = this.state
		return (
			<TopTop location={this.props.location}>
				<Hero url={BGExperience}>
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
					<br />
					<Label color='black'
						as='h1'
						content="EXPERIENCE"
						style={{
							fontFamily: '"Courier New", Courier, monospace',
							fontSize: '1.5em',
							fontWeight: 'normal',
							marginBottom: 0,
							marginTop: '0.7em',
						}}
					/>
				</Hero>

				<Grid centered style={{ margin: '3rem' }}>
					<Grid.Column width={4} />
					<Grid.Column width={12}>
						<div>
							<ExpHT
								srcimage={UCSF}
								title="TITLE EXPERIENCE 1"
								subtitle="Role Experience 1 | Date Experience 1"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui arcu, scelerisque non elit nec, lacinia vestibulum quam. Phasellus sed mattis magna. Integer mattis quis nisi sit amet facilisis. Integer vitae neque vel nisl volutpat varius nec ac ex. Suspendisse vel nunc arcu. Aenean id elementum justo. In faucibus convallis dapibus. Ut eu lectus sagittis leo placerat ornare. Duis eget varius orci, a vehicula diam."
							/>

							<ExpHT
								srcimage={UCSF}
								title="TITLE EXPERIENCE 2"
								subtitle="Role Experience 2 | Date Experience 2"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui arcu, scelerisque non elit nec, lacinia vestibulum quam. Phasellus sed mattis magna. Integer mattis quis nisi sit amet facilisis. Integer vitae neque vel nisl volutpat varius nec ac ex. Suspendisse vel nunc arcu. Aenean id elementum justo. In faucibus convallis dapibus. Ut eu lectus sagittis leo placerat ornare. Duis eget varius orci, a vehicula diam."
							/>
						</div>
						<div ref={this.handleContextRef}>
							<Rail position='left'>
								<Sticky context={contextRef} offset={80}>
									<Segment>
										<Header content="Experience 1" />
										<Header content="Experience 2" />
										<Header content="Experience 3" />
										<Header content="Experience 4" />
										<Header content="Experience 5" />
									</Segment>
								</Sticky>
							</Rail>
						</div>
					</Grid.Column>
				</Grid >
			</TopTop >

		)
	}
}


export default ExperiencePage
