import './App.css';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
} from '@apollo/client';
import { CreateUser } from './Components/CreateUser';
import ListOfUsers from './Components/ListOfUsers';
import GetDomains from './Components/GetDomains';

function App() {
	const client = new ApolloClient({
		uri: 'http://localhost:3002/graphql',
		cache: new InMemoryCache(),
	});
	return (
		<>
			<ApolloProvider client={client}>
				{/* <CreateUser /> */}
				<h2 className='App-header'>
					MULTI-DIMENSIONAL DATABASE SEARCH
				</h2>
				<div>
					<GetDomains />
				</div>
			</ApolloProvider>
		</>
	);
}

export default App;
