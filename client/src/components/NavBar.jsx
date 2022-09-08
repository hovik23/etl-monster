import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';

function NavBar( props ) {
	const cookies = new Cookies();

	const [isLogged, setIsLogged] = useState(cookies.get('access_token') ? true : false)

	const listener = cookies.addChangeListener(() => {
		setIsLogged(cookies.get('access_token') ? true : false)
	})

	return(
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" to="/etl">ETL</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/tables">Tables</Link>
					</li>
				</ul>
			</div>
			<div className="mx-auto order-0">
				<a className="navbar-brand mx-auto" href="/">ETL Monster</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
					<span className="navbar-toggler-icon"></span>
				</button>
			</div>
			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						{isLogged ? <Link className="nav-link" to="/account">Name Surname</Link> : <Link className="nav-link" to="/auth">Log In</Link>}
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar;