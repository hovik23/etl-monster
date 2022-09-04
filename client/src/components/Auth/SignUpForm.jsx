function SignUpForm() {
	return(
		<form>
			<div className="login-container">
				<div className="form-group">
					<div className="row">
						<div className="col">
							<input type="text" className="form-control" placeholder="First name"/>
						</div>
						<div class="col">
							<input type="text" className="form-control" placeholder="Last name"/>
						</div>
		  			</div>
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Music"/>
				</div>
				<div className="form-group">
					<input type="email" className="form-control" placeholder="Email"/>
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Username"/>
				</div>

				<div className="form-group">
					<input type="password" className="form-control" placeholder="Password"/>
				</div>
				<div className="form-group">
					<button type="button" class="btn btn-dark btn-lg btn-block">Sign Up</button>
				</div>
			</div>
		</form>
	)
}

export default SignUpForm;