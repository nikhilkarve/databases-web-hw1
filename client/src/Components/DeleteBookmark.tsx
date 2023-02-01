import { useMutation } from '@apollo/client';
import React from 'react';
import { DELETE_BOOKMARK } from '../Graphql/Mutation';

function DeleteBookmark(props: any) {
	const [deleteBookmark, error] = useMutation(DELETE_BOOKMARK);
	if (error) console.log(error);
	const onDelete = () => {
		console.log(
			'Tried deleteing',
			props.bname,
			props.userid,
			props.domainName,
			props.refresh
		);
		deleteBookmark({
			variables: {
				userid: props.userid,
				domainName: props.domainName,
				bname: props.bname,
			},
		});
		props.setRefresh(props.refresh + 1);
	};
	return (
		<button
			style={{
				width: '30px',
				padding: '4px',
				background: '#121212',
			}}
			onClick={onDelete}
		>
			❌
		</button>
	);
}

export default DeleteBookmark;
