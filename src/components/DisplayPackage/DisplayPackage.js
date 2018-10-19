import React from 'react';
import {Thumbnail, Panel, Row, Col, Button} from 'react-bootstrap';
import './DisplayPackage.css';

const displayPackage = (props) => {
	return (
		<React.Fragment>
			<Panel 
				bsStyle="primary" 
				className="PackagePanel">
		  		<Panel.Heading>
					<h1>{props.title}</h1>
				</Panel.Heading>
				<Row>
					<Col 
						sm={6}
						className="PackageColumn">
						<img 
							src={props.coachMugshot}
							alt={props.coach} />
					</Col>
					<Col 
						sm={6}
						className="PackageColumn">
						<Row><h3 className="CoachText">Coach: {props.coach}</h3></Row>
						<Row><p className="Description">{props.description}</p></Row>
						<Row><h2 className="PriceTag">${props.price}</h2></Row>
					</Col>
				</Row>
				<Panel.Footer className="PackageFooter">
					<Button 
						bsStyle="danger"
						className="CancelButton">Cancel</Button>
					<Button 
						bsStyle="success"
						className="ContinueButton">Continue</Button>
				</Panel.Footer>
			</Panel>		
		</React.Fragment>
	);
};

export default displayPackage;