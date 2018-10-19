import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './OrderSummary.css';

const orderSummary = (props) => {
	const packageOrder = props.packageOrder;
	return (
		<React.Fragment>
			<Modal.Header>
				<Modal.Title>Package Order Summary</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h3>Package Title: {props.title}</h3>
				<h3>Coached By: {props.coach}</h3>
				<h1>Price: ${props.price}</h1>
				<h4>Are you satisfied with this package?</h4>
			</Modal.Body>
			<Modal.Footer className="OrderSummaryFooter">
				<Button 
					bsSize="large"
					bsStyle="danger"
					onClick={props.notSatisfied}>No</Button>
				<LinkContainer to={props.link}>
					<Button
						className="ContinueOrder"
						bsSize="large"
						bsStyle="success"
						onClick={props.orderContinued}>Yes</Button>
				</LinkContainer>
			</Modal.Footer>
		</React.Fragment>
	);
};

export default orderSummary;