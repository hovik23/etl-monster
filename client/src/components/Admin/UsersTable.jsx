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
				{/*{
					props.users.map(() => 
						<tr>
							<th scope="row">hola</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>@mdo</td>
						</tr>
						)
				}*/}
			</tbody>
		</table>
		</>
		)
}

export default UsersTable;