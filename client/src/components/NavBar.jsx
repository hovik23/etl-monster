import React, { useState } from 'react';
import Account from './Auth/Account.jsx'
import Content from './Content.jsx';

function NavBar( props ) {
	const handleAccount = (e) => {
		e.preventDefault()
		props.setActiveTab('account')
	}

	const handleLogin = (e) => {
		e.preventDefault()
		props.setActiveTab('login')
	}

	const handleAdmin = (e) => {
		e.preventDefault()
		props.setActiveTab('admin')
	}

	const handleHome = (e) => {
		e.preventDefault()
		props.setActiveTab('etl')
	}

	return(
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" onClick={handleHome}>Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" onClick={handleAdmin}>Tables</a>
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
						<a className="nav-link" onClick={props.isLogged ? handleAccount : handleLogin}>{props.isLogged ? "Name Surname" : "Log In"}</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar;