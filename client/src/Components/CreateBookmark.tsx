import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { CREATE_BOOKMARK } from '../Graphql/Mutation';
import { GET_BOOKMARK } from '../Graphql/Queries';

function CreateBookmark(props: any) {
	const [isDisabled, setIsDisabled] = useState(false);
	const [bookmark, setBookmarkName] = useState('');

	const [createBookmark] = useMutation(CREATE_BOOKMARK);
	const params = { userid: props.userid, domainName: props.domain };
	const { loading, error, data } = useQuery(GET_BOOKMARK, {
		variables: params,
	});
	// console.log('rendered');
	// const [books, setBooks] = useState(data.getBookmark.length);
	// let books = data.getBookmark.length;
	// if (books === 5) setIsDisabled(true);
	// console.log('Number of books', books);

	const addBookmark = () => {
		// setbName();
		// setUserID(props.userid);
		// setDomainName(props.domain);
		// if (books < 5) books += 1;
		// if (books === 4) setIsDisabled(true);
		// console.log('Number of books', books);
		console.log(
			props.userid,
			props.domain,
			JSON.stringify(props.baseObj),
			bookmark
		);
		createBookmark({
			variables: {
				userid: props.userid,
				domainName: props.domain,
				bname: bookmark,
				bookmark: JSON.stringify(props.baseObj),
			},
		});
	};
	return (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<input
					type='text'
					placeholder='BookmarkName'
					style={{ marginRight: '20px', padding: '6px' }}
					onChange={(event) => {
						setBookmarkName(event.target.value);
					}}
				/>
				<button
					onClick={() => {
						addBookmark();
					}}
					disabled={isDisabled}
				>
					Add Bookmark
				</button>
			</div>
		</div>
	);
}

export default CreateBookmark;
