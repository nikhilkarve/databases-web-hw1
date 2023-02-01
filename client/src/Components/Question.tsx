import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_PROP_OPTIONS } from '../Graphql/Queries';

function Question(props: any) {
	const [selectedOption, setSelectedOption] = useState('');
	const [stateList, setStateList]: any = useState([]);
	let optionsObjs: any = [];
	// console.log('LIST OF BOOKS', props.bookmarkSelected);

	const testOptions = props.testOptions;
	// const testMultiOptions = props.testMultiOptions;
	let tryvar = props.tryvar;
	const questionStyle = {
		paddingBottom: '1.0em',
		marginBottom: '5px',
	};
	const reset = () => {
		setSelectedOption('');
	};
	useEffect(() => {
		reset();
	}, [props.refresh]);
	let bookmarkObj = props.bookmarkSelected
		? JSON.parse(props.bookmarkSelected.bookmark)
		: '';

	const execOneBookmark = () => {
		if (bookmarkObj.state) {
			console.log('HelllllloooFromState');
			console.log(typeof bookmarkObj.state.toString());
			let temp = bookmarkObj.state.toString().split('');
			setStateList(temp);
		}

		console.log('Hiiiii', bookmarkObj);
		console.log(stateList);

		for (let i = 0; i < optionsObjs.length; i++) {
			if (
				bookmarkObj.hasOwnProperty(optionsObjs[i].propertyName) &&
				bookmarkObj[optionsObjs[i].propertyName] ===
					optionsObjs[i].allowedValueCode
			) {
				console.log(optionsObjs[i]);
				setSelectedOption(optionsObjs[i].allowedValueCode);
				testOptions.push({
					propertyName: optionsObjs[i].propertyName,
					allowedValueCode: optionsObjs[i].allowedValueCode,
				});
			}
		}
	};

	useEffect(() => {
		var value = [];
		const testMultiOptions = props.testMultiOptions;
		for (let s of stateList) {
			console.log('J was her', stateList, s);
			value.push({
				propertyName: 'state',
				allowedValueCode: s,
			});
		}
		if (value.length > 0 && testMultiOptions.length == 0)
			testMultiOptions.push(value);
		console.log('bookState', testMultiOptions);
	}, [stateList]);

	useEffect(() => {
		execOneBookmark();
	}, [tryvar]);

	const { loading, error, data } = useQuery(GET_PROP_OPTIONS);
	if (loading) return <p>Loading..</p>;
	if (error) console.log(error);

	const handleChange = (val: any, name: any, code: any) => {
		console.log('Helllooooooo');
		setSelectedOption(val);
		testOptions.push({ propertyName: name, allowedValueCode: code });
		console.log('-------', testOptions);
		props.setSubmitted(false);
	};

	const handleMultipleOptions = (e: any) => {
		props.setSubmitted(false);
		var options = e.target.options;
		var value = [];
		const testMultiOptions = props.testMultiOptions;

		for (var i = 0, l = options.length; i < l; i++) {
			if (options[i].selected) {
				value.push({
					propertyName: props.questionDetails.propertyName,
					allowedValueCode: options[i].value[0],
				});
			}
		}

		testMultiOptions.push(value);
		console.log(testMultiOptions, testMultiOptions.length);
		console.log(testMultiOptions[testMultiOptions.length - 1]);
	};

	for (let i of data.getPropertyOptions) {
		if (
			i.domainName === props.questionDetails.domainName &&
			i.propertyName === props.questionDetails.propertyName
		) {
			optionsObjs.push(i);
		}
	}
	optionsObjs.sort((p1: any, p2: any) =>
		p1.allowedValueCode < p2.allowedValueCode
			? -1
			: p1.allowedValueCode > p2.allowedValueCode
			? 1
			: 0
	);

	return (
		<div>
			<div style={questionStyle}>
				<li style={{ marginBottom: '5px', fontSize: '16px' }}>
					{props.questionDetails.propertyQuestion}
				</li>
				{props.questionDetails.propertyDisplayType !==
					'multiselect' &&
				props.questionDetails.propertyDisplayType !== 'select' ? (
					optionsObjs.map((op: any) => (
						<div>
							{op.allowedValue}

							<input
								type={
									props.questionDetails.propertyDisplayType ===
										'multiselect' ||
									props.questionDetails.propertyDisplayType ===
										'select'
										? 'checkbox'
										: props.questionDetails.propertyDisplayType
								}
								value={op.allowedValue}
								checked={
									selectedOption === op.allowedValue ||
									(bookmarkObj.hasOwnProperty(op.propertyName) &&
										bookmarkObj[op.propertyName] ===
											op.allowedValueCode)
								}
								onChange={() =>
									handleChange(
										op.allowedValue,
										op.propertyName,
										op.allowedValueCode
									)
								}
							/>
						</div>
					))
				) : (
					<select
						multiple={true}
						onChange={handleMultipleOptions}
						style={{
							width: '250px',
							backgroundColor: '#343646',
							color: 'white',
							border: 'none',
						}}
					>
						{optionsObjs.map((op: any) => (
							<option
								value={[op.allowedValueCode, op.allowedValue]}
								style={{ padding: '7px' }}
								selected={stateList.includes(
									op.allowedValueCode.toString()
								)}
							>
								{op.allowedValue}
							</option>
						))}
					</select>
				)}
			</div>
		</div>
	);
}

export default Question;
