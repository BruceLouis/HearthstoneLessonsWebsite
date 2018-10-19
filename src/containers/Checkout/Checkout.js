import React, {Component} from 'react';
import {Grid, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import Spinner from '../../components/Spinner/Spinner.js';
import DisplayPackage from '../../components/DisplayPackage/DisplayPackage.js';

class Checkout extends Component {
	render(){
		let displayPendingPackage = this.props.chosenPackage ? (
			<DisplayPackage 
				title={this.props.chosenPackage.title}
				coach={this.props.chosenPackage.coach}
				coachMugshot={this.props.chosenPackage.coachMugshot}
				description={this.props.chosenPackage.description}
				price={this.props.chosenPackage.price}/> 
			) : <Spinner />
		return (
			<Grid>
				{displayPendingPackage}
			</Grid>
		);
	}
}

const mapStateToProps = (state) => {
	return {
        chosenPackage: state.currentPackage
	};
}

export default connect(mapStateToProps)(Checkout);