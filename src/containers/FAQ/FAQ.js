import React, {Component} from 'react';
import cloneDeep from 'lodash/cloneDeep';
import {Grid} from 'react-bootstrap';
import FAQs from '../../components/FAQs/FAQs.js';

class FAQ extends Component {
	state = {
		faqs: [
			{
				key: 0,
				question: "Who is the Hermanator?",
				answer: "The Hermanator is the man who loves being called the Hermanator.",
				showAnswer: false
			},
			{
				key: 1,
				question: "What is the Hermanator most famous for?",
				answer: "The Hermanator most famous for hermanating the grills in the pit.",
				showAnswer: false
			},
			{
				key: 2,
				question: "What else should we know about the Hermanator?",
				answer: "It's been said, we can replace 'come on man' with 'HERMAN MANNN'",
				showAnswer: false
			},
			{
				key: 3,
				question: "Why should we trust the Hermanator?",
				answer: "The Hermanator is to be trusted because he knows only of hermanating the grills in the pit " +
						"and being unable to hermanate the terminator. So he is the perfect hermanating coach for you.",
				showAnswer: false
			},
			{
				key: 4,
				question: "How old is the Hermanator?",
				answer: "The Hermanator is 24 hermanators old.",
				showAnswer: false
			},
			{
				key: 5,
				question: "What is Wesker's Arena Average?",
				answer: "Albert Wesker averages 10 wins per run. He never gets below 8 wins in a run because he is that " +
						"dam good in arena and always lucky.",
				showAnswer: false
			}
		]
	};

	toggleAnswerHandler = (keyArg) => {	
		const newArr = cloneDeep(this.state.faqs);
		const foundIndex = newArr.findIndex((el) => el.key === keyArg);	
		newArr[foundIndex]["showAnswer"] = !newArr[foundIndex]["showAnswer"];
		this.setState({faqs: newArr});		
	}

	render(){
		const faqsArray = this.state.faqs.map((faq) => {
			return (
				<FAQs 
					key={faq.key}
					question={faq.question}
					answer={faq.answer}
					clicked={()=>this.toggleAnswerHandler(faq.key)} 
					toggleAnswer={faq.showAnswer}/>
			)
		})
		return(
			<Grid>			
				{faqsArray}
			</Grid>
		);
	}
}

export default FAQ;