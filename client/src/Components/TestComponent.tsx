import { useQuery } from '@apollo/client';
import { GET_COLLEGES } from '../Graphql/Queries';
import CreateBookmark from './CreateBookmark';

function TestComponent(props: any) {
	let testMulti = [];
	let dupOptions = [];
	let tryThis: any = {};
	if (props.testMultiOptions.length > 0) {
		dupOptions =
			props.testMultiOptions[props.testMultiOptions.length - 1];
		console.log(dupOptions);

		dupOptions.length > 0 &&
			dupOptions.map((opt: any) => {
				let optName = opt.propertyName;
				// properties.push(optName);
				let optCode = opt.allowedValueCode;
				// values.push(optCode);
				if (tryThis[optName])
					tryThis[optName] = tryThis[optName] + optCode;
				else tryThis[optName] = optCode;
			});

		for (let d of dupOptions) {
			testMulti.push(d.allowedValueCode);
		}
		console.log(testMulti);
	}

	let testObj: any = {};
	let properties: any = [];
	let values: any = [];
	props.selectedOptions.length > 0 &&
		props.selectedOptions.map((opt: any) => {
			let optName = opt.propertyName;
			properties.push(optName);
			let optCode = opt.allowedValueCode;
			values.push(optCode);
			testObj[optName] = optCode;
			tryThis[optName] = optCode;
		});
	console.log('Take this: ', tryThis);
	const { loading, error, data } = useQuery(GET_COLLEGES, {
		variables: tryThis,
	});

	console.log(data);
	if (loading) return <p>Loading..</p>;
	if (error) console.log(error);

	let test = data.getColleges;
	let finalData = [];
	if (testMulti.length > 0) {
		for (let dataPoint of test) {
			if (testMulti.includes(String(dataPoint.state))) {
				finalData.push(dataPoint);
			}
		}
	} else {
		finalData = test;
	}

	let queryStr = 'select name, url from collegeFactTable where ';
	let testQ = '';
	for (let i = 0; i < properties.length; i++) {
		testQ = testQ + properties[i] + '=' + values[i];
		if (i < properties.length - 1 || testMulti.length > 0)
			testQ += ' and ';
		console.log(testQ);
	}
	if (testMulti.length > 0) {
		testQ += ' state IN(';
		for (let i = 0; i < testMulti.length; i++) {
			testQ += testMulti[i];
		}
		testQ += ');';
	} else testQ += ';';

	queryStr += testQ;

	console.log(test);
	console.log('------------------------', tryThis);
	console.log(props.userid, props.selectedDomain);
	return (
		<div>
			<p>{queryStr}</p>
			<CreateBookmark
				baseObj={tryThis}
				userid={props.userid}
				domain={props.selectedDomain}
			/>
			<table
				style={{
					width: 700,
					border: '1px solid rgb(0, 0, 0)',
					// borderStyle: 'double',
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
										{c.name}
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

export default TestComponent;
