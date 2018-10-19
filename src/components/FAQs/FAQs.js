import React from 'react';
import {Panel, Button, Glyphicon} from 'react-bootstrap';
import "./FAQs.css";

const faqs = (props) => {
	return(
		<React.Fragment>
		<Panel 
			onClick={props.clicked}
			className="Question" 
			block>
			{props.question}
			<Glyphicon glyph="chevron-down"/>
		</Panel>
		<Panel 
			expanded={props.toggleAnswer}
			className="Answer">	
			<Panel.Collapse>
				<Panel.Body>{props.answer}</Panel.Body>
			</Panel.Collapse>
		</Panel>
		</React.Fragment>
	);
};

export default faqs;
