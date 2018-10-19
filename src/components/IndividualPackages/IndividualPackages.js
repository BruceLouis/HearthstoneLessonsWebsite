import React from 'react';
import {Thumbnail, Button} from 'react-bootstrap';
import './IndividualPackages.css';

const individualPackages = (props) => {
	return (
		<Thumbnail className="IndividualPackages">			
			<h1>{props.title}</h1>
			<h3>Coached by: {props.coach}</h3>
			<h3>Price: ${props.price}</h3>
			<p>{props.description}</p>
			<Button 
				bsStyle="warning"
				bsSize="large" 
				onClick={props.clicked}
				block>ORDER NOW</Button>
		</Thumbnail>
	);
};

export default individualPackages;
