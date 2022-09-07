const UsersTable = ( props ) => {
	return (
		<>
		<h3>Users Table</h3>
		<table className="table table-dark">
			<thead>
			<tr>
				<th scope="col">User Id</th>
				<th scope="col">Name</th>
				<th scope="col">Surname</th>
				<th scope="col">Callback URL</th>
				<th scope="col">Music</th>
				<th scope="col">Email</th>
				<th scope="col">Login</th>
				<th scope="col">Password</th>
			</tr>
			</thead>
			<tbody>
				{
					props.users.map((user) => 
						<tr key={user['user_id']}>
							<th scope="row">{user['user_id']}</th>
							<td>{user['name']}</td>
							<td>{user['surname']}</td>
							<td>{user['callback_url']}</td>
							<td>{user['music']}</td>
							<td>{user['email']}</td>
							<td>{user['login']}</td>
							<td>{user['password']}</td>
						</tr>
					)
				}
			</tbody>
		</table>
		</>
		)
}

export default UsersTable;