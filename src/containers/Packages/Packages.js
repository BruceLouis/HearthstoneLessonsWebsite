import React, {Component} from 'react';
import {Grid, Col, Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import cloneDeep from 'lodash/cloneDeep';

import IndividualPackages from '../../components/IndividualPackages/IndividualPackages.js';
import OrderSummary from '../../components/OrderSummary/OrderSummary.js';
import * as actionTypes from '../../store/actions.js';

class Packages extends Component {
	state = {
		showOrder: false,
		summaryOrder: {
			title: "",
			coach: "",
			description: "",
			price: 0
		}
	};

	openOrderModalHandler = (individualPackagesArg) => {		
		const newOrderObj = cloneDeep(this.state.summaryOrder);
		newOrderObj.title = individualPackagesArg.title;
		newOrderObj.coach = individualPackagesArg.coach;
		newOrderObj.description = individualPackagesArg.description;
		newOrderObj.price = individualPackagesArg.price;
		this.setState({
			showOrder: true,
			summaryOrder: newOrderObj});
	}

	closeOrderModalHandler = () => {
		this.setState({showOrder: false});
	}

	render(){
		const packagesArray = this.props.packagesObj.map((individualPackages) => {
			return (
				<Col 
					sm={6} 
					key={individualPackages.title}>
				<IndividualPackages 
					title={individualPackages.title}
					coach={individualPackages.coach}
					price={individualPackages.price}
					description={individualPackages.description}
					clicked={() => {this.openOrderModalHandler(individualPackages)}} />
				</Col>
			);
		});
		return(
			<React.Fragment>
			<Modal show={this.state.showOrder} onHide={this.closeOrderModalHandler}>
				<OrderSummary
					key={this.state.summaryOrder.title}
					title={this.state.summaryOrder.title}
					coach={this.state.summaryOrder.coach}
					description={this.state.summaryOrder.description}
					price={this.state.summaryOrder.price}
					notSatisfied={this.closeOrderModalHandler}
					orderContinued={() => {this.props.onFetchPackage(this.state.summaryOrder.title)}}
					link="/checkout" />
			</Modal>
			<Grid>
				{packagesArray}
			</Grid>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        packagesObj: state.packages
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchPackage: (titleArg) => dispatch({type: actionTypes.GET_PACKAGE, title: titleArg})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Packages);