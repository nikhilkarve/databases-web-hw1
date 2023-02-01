import { gql } from '@apollo/client';

export const CREATE_USER = gql`
	mutation createUser(
		$name: String!
		$username: String!
		$password: String!
	) {
		createUser(
			name: $name
			username: $username
			password: $password
		) {
			id
			name
			username
		}
	}
`;

export const CREATE_BOOKMARK = gql`
	mutation createBookmark(
		$userid: String!
		$domainName: String!
		$bname: String!
		$bookmark: String!
	) {
		createBookmark(
			userid: $userid
			domainName: $domainName
			bname: $bname
			bookmark: $bookmark
		) {
			userid
			domainName
			bname
			bookmark
		}
	}
`;

export const DELETE_BOOKMARK = gql`
	mutation deleteBookmark(
		$userid: String!
		$domainName: String!
		$bname: String!
	) {
		deleteBookmark(
			userid: $userid
			domainName: $domainName
			bname: $bname
		) {
			userid
		}
	}
`;
