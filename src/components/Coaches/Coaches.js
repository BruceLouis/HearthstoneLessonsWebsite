import React from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import Wesker from '../../assets/images/Coaches/Wesker.png';
import Hermanator from '../../assets/images/Coaches/Hermanator.jpg';
import './Coaches.css';

const coaches = (props) => {
	return (
		<Grid>
			<Row>
				<Thumbnail className="CoachesThumbnail">
					<Col sm={4}>
						<img src={Wesker} className="CoachesImage"/>
					</Col>
					<Col sm={8}>
						<h2>Albert Wesker</h2>
						<ul className="CoachAttributes">
							<li>Great arena player</li>
							<li>Rarely ever plays ranked.</li>
							<li>Feels no need to spend all his time in ranked
							when he could simply improve his skills by playing non stop arena. </li>
							<li>Despite spending so little time honing his ranked skills, Mr Albert
							Wesker still easily hit legend with a grand 65% win rate.</li> 
						</ul>
						<p className="CoachAttributes">Albert Wesker is a prime example of what we believe in. Who needs 
						practice in ranked to get legend? He doesn't and you certainly don't either. 
						Albert Wesker will teach you his trade secrets in reaching legend while spending 
						bare minimal time in ranked.</p>
					</Col>
				</Thumbnail>
			</Row>
			<Row>
				<Thumbnail className="CoachesThumbnail">
					<Col sm={4}>
						<img src={Hermanator} className="CoachesImage"/>
					</Col>
					<Col sm={8}>
						<h2>The Hermanator</h2>
						<ul className="CoachAttributes">
							<li>Your rank 25 coach</li>
							<li>Is a bit of a dunce</li>
							<li>Only capable of reaching lowly rank 25</li>
							<li>Signature trait: Hermanating them grills in the pit</li>
						</ul>
						<p className="CoachAttributes">Since it's all the Hermanator can do, you as a student will 
						have to cut him some slack for being a bit of a bimbo. But, the Hermanator
						is still capable of hitting rank 25. But the Hermanator can't rank up beyond 
						rank 25. The Hermanator is proof that you don't need anything between your ears
						to rank up in ladder.</p>
					</Col>
				</Thumbnail>
			</Row>
		</Grid>
	);
};

export default coaches;