import React from 'react';
import {Jumbotron, Grid, Row, Col} from 'react-bootstrap';
import getLegendCardBack from '../../assets/images/LegendCardBack.png';
import './HomePage.css';

const homepage = (props) => {
	return (
		<React.Fragment>
			<Jumbotron className="TheJumbotron">
				<h2 className="HomePageHeader">Want Results Like This? Then Come Get Coaching Here</h2>
			</Jumbotron>
			<Grid>
				<Row>
					<Col sm={4}>
						<img 
							src={getLegendCardBack}
							alt="Legend CardBack"
							className="LegendCardBack"/>
					</Col>
					<Col sm={8} className="BecomeLegendIntro">
						<h1>Become Legendary</h1>
						<ul>
							<li className="IntroLists">Who needs spreadsheets, decktrackers and glossing over every little detail
								on HSReplay.net</li>
							<li className="IntroLists">All you need, is some simple arena techniques. 20 minutes is all you need
								that'll guarantee you the skills you need</li>
							<li className="IntroLists">Once you get the 20 mins of skill, you will become legend in no time</li>
						</ul>
					</Col>
				</Row>
			</Grid>
		</React.Fragment>
	);
};

export default homepage;