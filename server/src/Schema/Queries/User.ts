import {
	AutoType,
	BookmarkType,
	CollegeType,
	DomainType,
	OptionType,
	QuestionType,
	UserType,
} from '../TypeDefs/User';
import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql';
import {
	Domain,
	Property,
	PropertyDetail,
	CollegeTable,
	User,
	AutoTable,
	UserBookmark,
} from '../../Entities/Users';
import { In } from 'typeorm';

export const GET_DOMAINS = {
	type: new GraphQLList(DomainType),
	resolve() {
		return Domain.find();
	},
};

export const GET_PROP_QUESTIONS = {
	type: new GraphQLList(QuestionType),
	resolve() {
		return Property.find();
	},
};

export const GET_PROP_OPTIONS = {
	type: new GraphQLList(OptionType),
	resolve() {
		return PropertyDetail.find();
	},
};

export const GET_COLLEGES = {
	type: new GraphQLList(CollegeType),
	args: {
		publicOrPrivate: { type: GraphQLInt },
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
	},
	resolve(parent: any, args: any) {
		const {
			publicOrPrivate,
			region,
			state,
			focus,
			setting,
			collegeType,
			collegeSize,
			SATAvg,
			collegeRanking,
			sportsTradition,
			studentFacultyRatio,
			cost,
			collegeAge,
		} = args;

		let statesList = [
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'10',
			'11',
			'12',
			'13',
			'14',
			'15',
			'16',
			'17',
			'18',
			'19',
			'20',
			'21',
			'22',
			'23',
			'24',
			'25',
			'26',
			'27',
			'28',
			'29',
			'30',
			'31',
			'32',
			'33',
		];
		console.log('Hello I am in server', state);
		let temp = [];
		if (state) {
			for (let i = 0; i < state.length; i++) {
				temp.push(state[i]);
			}
			statesList = temp;
			console.log(statesList);
		}
		console.log(args);
		return CollegeTable.find({
			where: {
				publicOrPrivate: publicOrPrivate,
				region: region,
				state: In(statesList),
				focus: focus,
				setting: setting,
				collegeType: collegeType,
				collegeSize: collegeSize,
				SATAvg: SATAvg,
				collegeRanking: collegeRanking,
				sportsTradition: sportsTradition,
				studentFacultyRatio: studentFacultyRatio,
				cost: cost,
				collegeAge: collegeAge,
			},
		});
	},
};

export const GET_AUTO = {
	type: new GraphQLList(AutoType),
	args: {
		age: { type: GraphQLInt },
		bodyStyle: { type: GraphQLInt },
		color: { type: GraphQLInt },
		fuelType: { type: GraphQLInt },
		luxurySeats: { type: GraphQLInt },
		make: { type: GraphQLInt },
		mileage: { type: GraphQLInt },
		priceRange: { type: GraphQLInt },
		sellerType: { type: GraphQLInt },
		sunroof: { type: GraphQLInt },
		transmission: { type: GraphQLInt },
		usedOrNew: { type: GraphQLInt },
	},
	resolve(parent: any, args: any) {
		const {
			age,
			bodyStyle,
			color,
			fuelType,
			luxurySeats,
			make,
			mileage,
			priceRange,
			sellerType,
			sunroof,
			transmission,
			usedOrNew,
		} = args;
		return AutoTable.find({
			where: {
				age: age,
				bodyStyle: bodyStyle,
				color: color,
				fuelType: fuelType,
				luxurySeats: luxurySeats,
				make: make,
				mileage: mileage,
				priceRange: priceRange,
				sunroof: sunroof,
				sellerType: sellerType,
				transmission: transmission,
				usedOrNew: usedOrNew,
			},
		});
	},
};

export const GET_USER = {
	type: new GraphQLList(UserType),
	args: { userid: { type: GraphQLString } },
	resolve(parent: any, args: any) {
		const { userid } = args;
		return User.find({
			where: { userid: userid },
		});
	},
};

export const GET_BOOKMARK = {
	type: new GraphQLList(BookmarkType),
	args: {
		userid: { type: GraphQLString },
		domainName: { type: GraphQLString },
	},
	resolve(parent: any, args: any) {
		const { userid, domainName, bname } = args;
		return UserBookmark.find({
			where: { userid: userid, domainName: domainName },
		});
	},
};
