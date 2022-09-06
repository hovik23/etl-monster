import {useState} from 'react';

function Account() {
	return(
		<form>
			<div className="account-container">
				<div className="row">
					<div className="col-12 col-md-8">
						<h3>Account Info</h3>
						<div className="form-group row">
							<label htmlFor="accountName" className="col-sm-2 col-form-label">Name</label>
							<div className="col-sm-10">
								<input
									type="text"
									className="form-control"
									id="accountName"
									placeholder="Name"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="accountSurname" className="col-sm-2 col-form-label">Surname</label>
							<div className="col-sm-10">
								<input
									type="text"
									className="form-control"
									id="accountSurname"
									placeholder="Surname"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="accountMusic"
								className="col-sm-2 col-form-label"
							>Music</label>
							<div className="col-sm-10">
								<input
									type="text"
									className="form-control"
									id="accountMusic"
									placeholder="Super Sako - Mi Gna ft. Hayko █▬█ █ ▀█▀ (Official Audio)"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="accountEmail" className="col-sm-2 col-form-label">Email</label>
							<div className="col-sm-10">
								<input
									type="email"
									className="form-control"
									id="accountEmail"
									placeholder="Email"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="accountUsername"
								className="col-sm-2 col-form-label"
							>Username</label>
							<div className="col-sm-10">
								<input
									type="text"
									className="form-control"
									id="accountUsername"
									placeholder="Username"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="accountPassword"
								className="col-sm-2 col-form-label"
							>Password</label>
							<div className="col-sm-10">
								<input
									type="password"
									className="form-control"
									id="accountPassword"
									placeholder="Password"
								/>
							</div>
						</div>
						<button type="button" className="btn btn-success float-right">Save</button>
					</div>
					<div className="col-6 col-md-4">Placeholder</div>
				</div>
			</div>
		</form>
	)
}

export default Account;