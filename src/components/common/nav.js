import React from 'react';
import { Link } from 'react-router';


const Nav = () => {
		return (


			<nav>
				<div className="nav-wrapper">
					<Link to="/react-popcorn" className="brand-logo">MOVIES-R-US</Link>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><Link to="playlist">PLAYLIST</Link></li>
						<li><Link to="about">ABOUT</Link></li>
						<li><Link to="contact">CONTACT</Link></li>
				</ul>
				</div>
			</nav>   


		)
	}


export default Nav;