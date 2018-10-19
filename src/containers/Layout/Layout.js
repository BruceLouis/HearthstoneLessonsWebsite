import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar/NavigationBar.js';
import HomePage from '../../components/HomePage/HomePage.js';
import Coaches from '../../components/Coaches/Coaches.js';
import Packages from '../Packages/Packages.js';
import Testimonies from '../Testimonies/Testimonies.js';
import FAQ from '../FAQ/FAQ.js';
import Checkout from '../Checkout/Checkout.js';
import './Layout.css';

class Layout extends Component {
	render() {
		return(
			<React.Fragment>
				<NavigationBar />
				<div className="container">
					<Route path="/coaches" component={Coaches}/> 
					<Route path="/packages" component={Packages}/>
					<Route path="/testimonies" component={Testimonies}/>
					<Route path="/faq" component={FAQ}/>
					<Route path="/checkout" component={Checkout}/>
					<Route path="/" exact component={HomePage}/>
				</div>
			</React.Fragment>
		);
	}
}

export default Layout;