import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useState } from 'react';
import { GET_PROP_QUESTIONS } from '../Graphql/Queries';
import DisplayBookmarks from './DisplayBookmarks';
import Pagination from './Pagination';
import Question from './Question';
import TestComponent from './TestComponent';
import TestComponentAuto from './TestComponentAuto';

function DomainQuestions(props: any) {
	const [resetState, setReset] = useState(false);
	const [refresh, doRefresh] = useState(0);
	const [tryvar, setTryvar] = useState(0);
	const [bookmarkSelected, setBookmarkSelected] = useState();

	let reqDomain = props.domain.domainName;

	const getBooks = (val: any) => {
		setBookmarkSelected(val);
		console.log(bookmarkSelected);
	};

	const [submitted, setSubmitted] = useState(false);
	// const [optList, setOptList] = useState([]);
	let optList = props.optList;
	let testMultiOptions = props.testMultiOptions;
	// Pagination
	// User is currently on this page
	const [currentPage, setCurrentPage] = useState(1);
	// No of Records to be displayed on each page
	const [recordsPerPage] = useState(3);
	const searchStyle = {
		paddingLeft: '0.4rem',
		paddingTop: '0.5rem',
	};
	const resetStyle = {
		paddingLeft: '0.9rem',
		paddingTop: '0.5rem',
	};
	const containerStyle = {
		display: 'flex',
	};

	const { loading, error, data } = useQuery(GET_PROP_QUESTIONS);
	if (loading) return <p>Loading..</p>;
	if (error) console.log(error);

	let test = data?.getPropertyQuestions;

	let questions = [];
	for (let i of test) {
		if (i.domainName === reqDomain) questions.push(i);
	}

	questions.sort((p1, p2) =>
		p1.displayorder < p2.displayorder
			? -1
			: p1.displayorder > p2.displayorder
			? 1
			: 0
	);
	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	const currentQ = questions.slice(
		indexOfFirstRecord,
		indexOfLastRecord
	);
	const nPages = Math.ceil(questions.length / recordsPerPage);

	const qItems: any = currentQ.map((q) => {
		return (
			<Question
				questionDetails={q}
				testOptions={props.optList}
				refresh={refresh}
				setSubmitted={setSubmitted}
				testMultiOptions={props.testMultiOptions}
				bookmarkSelected={bookmarkSelected}
				tryvar={tryvar}
			/>
		);
	});

	const onSubmit = () => {
		setSubmitted(true);
	};

	const execTwoBookmark = () => {
		setTryvar((prev) => prev + 1);
	};

	console.log('Magic', testMultiOptions);

	return (
		<>
			<DisplayBookmarks
				userid={props.userid}
				sendData={getBooks}
				execFinal={execTwoBookmark}
				domain={reqDomain}
			/>
			{console.log(bookmarkSelected)}
			<div>
				<ul>{qItems}</ul>
			</div>
			<div style={containerStyle}>
				<Pagination
					nPages={nPages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
				<div style={searchStyle}>
					<button onClick={onSubmit}>Search</button>
				</div>
				<div style={resetStyle}>
					<button
						onClick={() => {
							doRefresh((prev) => prev + 1);
							setReset(true);
							setSubmitted(false);
						}}
					>
						Reset
					</button>
				</div>
			</div>
			<h3>Results:</h3>
			{console.log('State', resetState)}
			{console.log(props.domain.domainName)}
			{props.domain.domainName === 'Colleges'
				? submitted && (
						<TestComponent
							selectedOptions={resetState ? [] : optList}
							testMultiOptions={testMultiOptions}
							selectedDomain={reqDomain}
							userid={props.userid}
						/>
				  )
				: submitted && (
						<TestComponentAuto
							selectedOptions={resetState ? [] : optList}
							testMultiOptions={testMultiOptions}
							selectedDomain={reqDomain}
							userid={props.userid}
						/>
				  )}
		</>
	);
}

export default DomainQuestions;
