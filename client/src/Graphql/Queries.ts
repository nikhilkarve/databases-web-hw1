import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
	query getAllUsers {
		getAllUsers {
			name
			username
		}
	}
`;

export const GET_DOMAINS = gql`
	query getDomains {
		getDomains {
			domainName
		}
	}
`;

export const GET_PROP_QUESTIONS = gql`
	query getPropertyQuestions {
		getPropertyQuestions {
			domainName
			propertyName
			propertyQuestion
			displayorder
			propertyDisplayType
		}
	}
`;

export const GET_PROP_OPTIONS = gql`
	query getPropertyOptions {
		getPropertyOptions {
			domainName
			propertyName
			allowedValue
			allowedValueCode
		}
	}
`;

export const GET_COLLEGES = gql`
	query getColleges(
		$publicOrPrivate: Int
		$region: Int
		$state: String
		$focus: Int
		$setting: Int
		$collegeType: Int
		$collegeSize: Int
		$SATAvg: Int
		$collegeRanking: Int
		$sportsTradition: Int
		$studentFacultyRatio: Int
		$cost: Int
		$collegeAge: Int
	) {
		getColleges(
			publicOrPrivate: $publicOrPrivate
			region: $region
			state: $state
			focus: $focus
			setting: $setting
			collegeType: $collegeType
			collegeSize: $collegeSize
			SATAvg: $SATAvg
			collegeRanking: $collegeRanking
			sportsTradition: $sportsTradition
			studentFacultyRatio: $studentFacultyRatio
			cost: $cost
			collegeAge: $collegeAge
		) {
			name
			url
			state
		}
	}
`;

export const GET_AUTO = gql`
	query getAuto(
		$age: Int
		$bodyStyle: Int
		$color: Int
		$fuelType: Int
		$luxurySeats: Int
		$make: Int
		$mileage: Int
		$priceRange: Int
		$sellerType: Int
		$sunroof: Int
		$transmission: Int
		$usedOrNew: Int
	) {
		getAuto(
			age: $age
			bodyStyle: $bodyStyle
			color: $color
			fuelType: $fuelType
			luxurySeats: $luxurySeats
			make: $make
			mileage: $mileage
			priceRange: $priceRange
			sellerType: $sellerType
			sunroof: $sunroof
			transmission: $transmission
			usedOrNew: $usedOrNew
		) {
			autoID
			url
			make
		}
	}
`;

export const GET_USER = gql`
	query getUser($userid: String) {
		getUser(userid: $userid) {
			userid
		}
	}
`;

export const GET_BOOKMARK = gql`
	query getBookmark($userid: String, $domainName: String) {
		getBookmark(userid: $userid, domainName: $domainName) {
			userid
			domainName
			bname
			bookmark
		}
	}
`;
