import React from 'react';
import { useState } from 'react';

function Pagination(props: any) {
	const [disableLast, setDisableLast] = useState(true);
	const [disableNext, setDisableNext] = useState(false);
	const pageStyle = {
		padding: '0.5rem',
	};
	const btnContainer = {
		display: 'flex',
	};

	const nextPage = () => {
		if (props.currentPage !== props.nPages) {
			props.setCurrentPage(props.currentPage + 1);
			if (disableLast) setDisableLast(false);
		}

		if (props.currentPage === props.nPages - 1) setDisableNext(true);
	};
	const prevPage = () => {
		if (props.currentPage !== 1) {
			props.setCurrentPage(props.currentPage - 1);
			if (disableNext) setDisableNext(false);
		}

		if (props.currentPage === 2) setDisableLast(true);
	};
	return (
		<div style={btnContainer}>
			<div style={pageStyle}>
				<button onClick={prevPage} disabled={disableLast}>
					Previous
				</button>
			</div>
			<div style={pageStyle}>
				<button onClick={nextPage} disabled={disableNext}>
					Next
				</button>
			</div>
		</div>
	);
}

export default Pagination;
