import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
} from 'graphql';

// export const UserType = new GraphQLObjectType({
// 	name: 'User',
// 	fields: () => ({
// 		id: { type: GraphQLID },
// 		name: { type: GraphQLString },
// 		username: { type: GraphQLString },
// 		password: { type: GraphQLString },
// 	}),
// });

export const DomainType = new GraphQLObjectType({
	name: 'Domain',
	fields: () => ({
		domainName: { type: GraphQLString },
		factTableName: { type: GraphQLString },
	}),
});

export const QuestionType = new GraphQLObjectType({
	name: 'Question',
	fields: () => ({
		domainName: { type: GraphQLString },
		propertyName: { type: GraphQLString },
		propertyQuestion: { type: GraphQLString },
		displayorder: { type: GraphQLInt },
		propertyDisplayType: { type: GraphQLString },
	}),
});

export const OptionType = new GraphQLObjectType({
	name: 'Option',
	fields: () => ({
		domainName: { type: GraphQLString },
		propertyName: { type: GraphQLString },
		allowedValue: { type: GraphQLString },
		allowedValueCode: { type: GraphQLInt },
	}),
});

export const CollegeType = new GraphQLObjectType({
	name: 'College',
	fields: () => ({
		name: { type: GraphQLString },
		publicOrPrivate: { type: GraphQLInt },
		url: { type: GraphQLString },
		region: { type: GraphQLInt },
		state: { type: GraphQLString },
		focus: { type: GraphQLInt },
		setting: { type: GraphQLInt },
		collegeType: { type: GraphQLInt },
		collegeSize: { type: GraphQLInt },
		SATAvg: { type: GraphQLInt },
		collegeRanking: { type: GraphQLInt },
		sportsTradition: { type: GraphQLInt },
		studentFacultyRatio: { type: GraphQLInt },
		cost: { type: GraphQLInt },
		collegeAge: { type: GraphQLInt },
	}),
});

export const AutoType = new GraphQLObjectType({
	name: 'Auto',
	fields: () => ({
		autoID: { type: GraphQLString },
		usedOrNew: { type: GraphQLInt },
		url: { type: GraphQLString },
		bodyStyle: { type: GraphQLInt },
		make: { type: GraphQLInt },
		age: { type: GraphQLInt },
		priceRange: { type: GraphQLInt },
		sellerType: { type: GraphQLInt },
		mileage: { type: GraphQLInt },
		color: { type: GraphQLInt },
		sunroof: { type: GraphQLInt },
		luxurySeats: { type: GraphQLInt },
		transmission: { type: GraphQLInt },
		fuelType: { type: GraphQLInt },
	}),
});

export const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		userid: { type: GraphQLString },
	}),
});

export const BookmarkType = new GraphQLObjectType({
	name: 'Bookmark',
	fields: () => ({
		userid: { type: GraphQLString },
		domainName: { type: GraphQLString },
		bname: { type: GraphQLString },
		bookmark: { type: GraphQLString },
	}),
});
