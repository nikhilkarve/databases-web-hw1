import { useQuery } from '@apollo/client';
import { GET_AUTO } from '../Graphql/Queries';

function TestComponentAuto(props: any) {
	console.log(props.selectedOptions);

	let testMulti = [];
	if (props.testMultiOptions.length > 0) {
		let dupOptions =
			props.testMultiOptions[props.testMultiOptions.length - 1];
		console.log(dupOptions);

		for (let d of dupOptions) {
			testMulti.push(d.allowedValueCode);
		}
	}

	console.log(testMulti);
	let testObj: any = {};
	props.selectedOptions.length > 0 &&
		props.selectedOptions.map((opt: any) => {
			let optName = opt.propertyName;
			let optCode = opt.allowedValueCode;
			testObj[optName] = optCode;
		});

	console.log('--------------', testObj);
	const { loading, error, data } = useQuery(GET_AUTO, {
		variables: testObj,
	});

	if (loading) return <p>Loading..</p>;
	if (error) console.log(error);
	console.log(data);

	let test = data.getAuto;
	let finalData = [];
	if (testMulti.length > 0) {
		for (let dataPoint of test) {
			console.log(dataPoint);
			if (testMulti.includes(String(dataPoint.make))) {
				finalData.push(dataPoint);
			}
		}
	} else {
		finalData = test;
	}

	console.log('FINAL', finalData);

	console.log(test);
	return (
		<div>
			<table
				style={{
					width: 700,
					border: '1px solid rgb(0, 0, 0)',
					borderCollapse: 'collapse',
					marginTop: '15px',
					boxShadow: '0 12px 35px 0 rgba(255, 235, 167, 0.15)',
				}}
			>
				<thead>
					<tr>
						<th
							style={{
								border: '1px solid #ffffff',
								borderStyle: 'double',
								padding: '10px',
							}}
						>
							Name
						</th>
						<th
							style={{
								border: '1px solid #ffffff',
								borderStyle: 'double',
								padding: '10px',
							}}
						>
							URL
						</th>
					</tr>
				</thead>
				<tbody>
					{finalData.map((c: any) => {
						return (
							<>
								<tr>
									<td
										style={{
											border: '1px solid #ffffff',
											borderStyle: 'double',
											padding: '13px',
										}}
									>
										{c.autoID}
									</td>
									<td
										style={{
											border: '1px solid #ffffff',
											borderStyle: 'double',
											padding: '10px',
										}}
									>
										<a href={c.url}>{c.url}</a>
									</td>
								</tr>
							</>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default TestComponentAuto;
