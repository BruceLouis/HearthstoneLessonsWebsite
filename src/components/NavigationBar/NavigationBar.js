import React from 'react';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import legendLogo from '../../assets/images/LegendLogo.png';
import './NavigationBar.css';

const navigationBar = (props) => {
	return (
		<Navbar className="Navbar">
			<Navbar.Header>
				<Nav pullLeft>
					<Link exact to="/">
						<img 
							className="Logo"
							src={legendLogo}
							alt="LegendLogo" />
					</Link>
				</Nav>	
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav className="CenteredNav">
					<LinkContainer exact to="/"><NavItem>Home</NavItem></LinkContainer>
					<LinkContainer to="/coaches"><NavItem>Coaches</NavItem></LinkContainer>
					<LinkContainer to="/packages"><NavItem>Packages</NavItem></LinkContainer>
					<LinkContainer to="/testimonies"><NavItem>Testimonies</NavItem></LinkContainer>
					<LinkContainer to="/faq"><NavItem>FAQ</NavItem></LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default navigationBar;