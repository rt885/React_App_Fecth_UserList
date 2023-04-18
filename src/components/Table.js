function Table(props) {
	return (
		<div>
			<table className='table table-striped'>
				<thead>
					<tr>
						{props.headers.map(
							(header, index) => {
								return (<th key={index} scope='col'>{header.title}</th>)}
							)
						}
					</tr>
				</thead>
				<tbody>
					{
						props.data.map((user, index) => {
							return (
								<tr key={index}>
									{
										props.headers.map((header, index) => {
											return (
												<td key={index}>
													{
														header.render ?
															header.render(user[header.key]) :
															user[header.key]
													}
												</td>
											)
										})
									}
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</div>
	)
}

export default Table;