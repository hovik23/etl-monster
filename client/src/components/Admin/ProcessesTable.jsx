const ProcessesTable = ( props ) => {
	return (
		<>
		<h3>Processes Table</h3>
		<table className="table table-dark">
			<thead>
			<tr>
				<th scope="col">Proccess Id</th>
				<th scope="col">User Id</th>
			</tr>
			</thead>
			<tbody>
				{
					props.processes.map((proc) => 
						<tr key={proc['process_id']}>
							<th scope="row">{proc['process_id']}</th>
							<td>{proc['user_id']}</td>
						</tr>
					)
				}
			</tbody>
		</table>
		</>
		)
}

export default ProcessesTable;