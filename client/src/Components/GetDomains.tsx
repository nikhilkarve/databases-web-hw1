import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_DOMAINS } from '../Graphql/Queries';
import DomainQuestions from './DomainQuestions';
import Dropdown from './Dropdown';
import GetUser from './GetUser';

function GetDomains() {
	const [dom, setDom] = useState(false);
	const [selectedDomain, setSelectedDomain] = useState();
	// For user
	const [message, setMessage] = useState('');
	const [updated, setUpdated] = useState(message);
	const [userid, setUserId] = useState('');

	const handleChange = (event: any) => {
		setMessage(event.target.value);
	};
	const handleClick = () => {
		setHideIp(true);
		setUpdated(message);
	};
	// const [optList, setOptList] = useState([]);
	let optList: any = [];
	let testMultiOptions: any = [];
	// Function for getting the name of clicked domain
	const handleDomain = (option: any) => {
		setSelectedDomain(option);
		setDom(true);
	};
	const [hideIp, setHideIp] = useState(false);

	const { data } = useQuery(GET_DOMAINS);
	let domainNames: any = [];
	if (data) {
		data.getDomains.map((domain: any) => {
			domainNames.push(
				<button onClick={() => handleDomain(domain)}>
					{domain.domainName}
				</button>
			);
		});
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div>
				{!hideIp && (
					<div style={{ display: 'flex' }}>
						<input
							type='text'
							placeholder='UserID'
							onChange={handleChange}
						/>
						<button
							style={{ marginLeft: '10px' }}
							onClick={handleClick}
						>
							Get User
						</button>
					</div>
				)}
				{hideIp && (
					<GetUser
						setHideIp={setHideIp}
						user={updated}
						setUser={setUserId}
					/>
				)}
				<Dropdown
					trigger={
						<button
							style={{
								marginBottom: '10px',
								fontSize: 14,
							}}
						>
							Select a domain 👇
						</button>
					}
					menu={domainNames}
				/>
			</div>
			<h3>Search Criteria:</h3>
			{dom && (
				<DomainQuestions
					domain={selectedDomain}
					optList={optList}
					testMultiOptions={testMultiOptions}
					userid={userid}
					// setOptList={setOptList}
				/>
			)}
			<hr
				style={{
					background: 'rgb(0,0,0)',
					height: '1px',
					border: 'none',
				}}
			/>
		</div>
	);
}

export default GetDomains;
