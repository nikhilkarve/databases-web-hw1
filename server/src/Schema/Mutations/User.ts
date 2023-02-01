import { BookmarkType, UserType } from '../TypeDefs/User';
import { GraphQLString } from 'graphql';
import { UserBookmark, Users } from '../../Entities/Users';

export const CREATE_USER = {
	type: UserType,
	args: {
		name: { type: GraphQLString },
		username: { type: GraphQLString },
		password: { type: GraphQLString },
	},
	async resolve(parent: any, args: any) {
		const { name, username, password } = args;
		await Users.insert({ name, username, password });
		return args;
	},
};

export const CREATE_BOOKMARK = {
	type: BookmarkType,
	args: {
		userid: { type: GraphQLString },
		domainName: { type: GraphQLString },
		bname: { type: GraphQLString },
		bookmark: { type: GraphQLString },
	},
	async resolve(parent: any, args: any) {
		const { userid, domainName, bname, bookmark } = args;
		await UserBookmark.insert({
			userid,
			domainName,
			bname,
			bookmark,
		});
		return args;
	},
};

export const DELETE_BOOKMARK = {
	type: BookmarkType,
	args: {
		userid: { type: GraphQLString },
		domainName: { type: GraphQLString },
		bname: { type: GraphQLString },
	},
	async resolve(parent: any, args: any) {
		const { userid, domainName, bname, bookmark } = args;
		await UserBookmark.delete({
			userid: userid,
			domainName: domainName,
			bname: bname,
		});
		return 'User deleted';
	},
};
