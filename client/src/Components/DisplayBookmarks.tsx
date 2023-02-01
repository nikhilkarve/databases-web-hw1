import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_BOOKMARK } from '../Graphql/Queries';
import DeleteBookmark from './DeleteBookmark';

function DisplayBookmarks(props: any) {
	const [refresh, setRefresh] = useState(0);

	const params = { userid: props.userid, domainName: props.domain };
	const { loading, error, data } = useQuery(GET_BOOKMARK, {
		variables: params,
	});
	if (loading) return <p>Loading..</p>;
	if (error) console.log(error);
	console.log(data.getBookmark);
	const passData = (val: any) => {
		props.sendData(val);
	};

	return data.getBookmark.length > 0 ? (
		<div>
			<div>
				<h4
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					User Bookmarks:
				</h4>
				<ul style={{ display: 'flex' }}>
					{data.getBookmark.map((b: any) => {
						console.log(b.bname);
						return (
							<div>
								<button
									onClick={() => {
										passData(b);
										props.execFinal();
									}}
									style={{
										background: '#4bad57',
										marginLeft: '10px',
										width: '90px',
									}}
								>
									{b.bname}
								</button>
								<DeleteBookmark
									userid={props.userid}
									domainName={props.domain}
									bname={b.bname}
									setRefresh={setRefresh}
									refresh={refresh}
								/>
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	) : (
		<h4>No Bookmarks Yet</h4>
	);
}

export default DisplayBookmarks;
