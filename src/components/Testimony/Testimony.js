import React from 'react';
import {Thumbnail, Row, Col} from 'react-bootstrap';
import './Testimony.css';

const testimony = (props) => {
	return (
		<Row>
			<Thumbnail className="Testimony">
				<Col sm={4}>
					<img 
						className="TestimonyMugShot"
						src={props.mugshot}
						alt={props.name}/>
				</Col>
				<Col sm={8}>
					<h3>{props.name}</h3>
					<p><em>{props.review}</em></p>
				</Col>
			</Thumbnail>
		</Row>
	);
};

export default testimony;