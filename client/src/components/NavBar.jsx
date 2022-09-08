import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';

function NavBar( props ) {
	const cookies = new Cookies()

	const [accountName, setAccountName] = useState('')

	  useEffect(() => {
	  	fetch('http://localhost:5000/auth/user_info', {
			'method':'POST',
			headers : {
			'Content-Type':'application/json'
			},
			body: JSON.stringify({"user_id": cookies.get("user_id")})
		}).then(response => { return response.json() })
		.then(data => {
			setAccountName(data['name'] + ' ' + data['surname'])
		})
	}, []);

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
						{props.isLogged ? <Link className="nav-link" to="/account">{accountName}</Link> : <Link className="nav-link" to="/auth">Log In</Link>}
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar;