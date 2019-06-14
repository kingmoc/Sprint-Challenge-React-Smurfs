import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = (props) => (
		<div className="navBar">

			<NavLink to="/"> Home </NavLink>
			<NavLink to="/addSmurf"> Add Smurf </NavLink>

		</div>
	);

export default NavBar;