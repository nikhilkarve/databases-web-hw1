import { useQuery } from '@apollo/client';
import { GET_USER } from '../Graphql/Queries';
import DisplayBookmarks from './DisplayBookmarks';

function GetUser(props: any) {
	const { loading, error, data } = useQuery(GET_USER, {
		variables: { userid: props.user },
	});
	if (error) props.setHideIp(false);
	// if (error) console.log(error);
	if (loading) return <p>Loading....</p>;
	if (data.getUser.length > 0) {
		console.log(data, 'd');
		let temp = data.getUser;
		let userid = temp[0].userid;
		props.setUser(userid);

		return (
			<div>
				<h3
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					Welcome, {userid.charAt(0).toUpperCase() + userid.slice(1)}
				</h3>
			</div>
		);
	} else {
		props.setHideIp(false);
	}
	return null;
}

export default GetUser;
