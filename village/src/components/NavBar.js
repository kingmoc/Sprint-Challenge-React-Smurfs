import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = (props) => (
		<div className="navBar">

			<NavLink to="/"> <button>Home</button> </NavLink>
			<NavLink to="/addSmurf"> <button>Add Smurf!</button> </NavLink>

		</div>
	);

export default NavBar;