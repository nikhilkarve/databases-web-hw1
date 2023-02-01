import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import {
	GET_AUTO,
	GET_BOOKMARK,
	GET_COLLEGES,
	GET_DOMAINS,
	GET_PROP_OPTIONS,
	GET_PROP_QUESTIONS,
	GET_USER,
} from './Queries/User';
import {
	CREATE_BOOKMARK,
	CREATE_USER,
	DELETE_BOOKMARK,
} from './Mutations/User';

const RootQuery = new GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		getDomains: GET_DOMAINS,
		getPropertyQuestions: GET_PROP_QUESTIONS,
		getPropertyOptions: GET_PROP_OPTIONS,
		getColleges: GET_COLLEGES,
		getUser: GET_USER,
		getAuto: GET_AUTO,
		getBookmark: GET_BOOKMARK,
	},
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		createUser: CREATE_USER,
		createBookmark: CREATE_BOOKMARK,
		deleteBookmark: DELETE_BOOKMARK,
	},
});

export const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});
