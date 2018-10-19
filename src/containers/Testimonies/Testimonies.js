import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

import lacari from '../../assets/images/Testimonies/lacari.png';
import kripp from '../../assets/images/Testimonies/kripp.png';
import reynad from '../../assets/images/Testimonies/reynad.png';

import Testimony from '../../components/Testimony/Testimony.js';

class Testimonies extends Component {
	state = {
		testimonies: [
			{
				name: "Lacari",
				mugshot: lacari,
				review: "Thanks to the Hermanator, I went from being bald to having hair in "
						+ "10 minutes through his ape like skills and ape like teaching skills.",
			},
			{
				name: "Kripp",
				mugshot: kripp,
				review: "I went from an average frustrated ranked chump coming over from arena, to now "
						+ "getting legend like it's nobody's business. Thank you Albert Wesker, 50 out of 5 stars.",
			},
			{
				name: "Reynad",
				mugshot: reynad,
				review: "I was a frustrated Zoo chump, who knew nothing but Zoo, but Albert Wesker helped me open "
						+ "my eyes to the Wesker Warrior, the Wesker Mage and the WeskerLock.",
			}
		]
	};
	render () {
		const testimonyArray = this.state.testimonies.map(testimony => {
			return(
				<Testimony 
					key={testimony.name}
					name={testimony.name}
					mugshot={testimony.mugshot}
					review={testimony.review} />
			);
		})
		return (
			<Grid>
				{testimonyArray}
			</Grid>
		);
	}
};

export default Testimonies;