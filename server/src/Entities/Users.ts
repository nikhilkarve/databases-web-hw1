import {
	BaseEntity,
	Column,
	Entity,
	PrimaryColumn,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Users extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@Column()
	username!: string;

	@Column()
	password!: string;
}

@Entity()
export class Domain extends BaseEntity {
	@PrimaryGeneratedColumn()
	domainName!: string;

	@Column()
	factTableName!: string;
}

@Entity()
export class Property extends BaseEntity {
	@Column()
	domainName!: string;

	@Column()
	propertyName!: string;

	@PrimaryColumn()
	propertyQuestion!: string;

	@Column()
	displayorder!: number;

	@Column()
	propertyDisplayType!: string;
}
@Entity('propertyDetail')
export class PropertyDetail extends BaseEntity {
	@PrimaryColumn()
	domainName!: string;

	@PrimaryColumn()
	propertyName!: string;

	@PrimaryColumn()
	allowedValue!: string;

	@Column()
	allowedValueCode!: number;
}

@Entity('collegeFactTable')
export class CollegeTable extends BaseEntity {
	@PrimaryColumn()
	name!: string;

	@Column()
	publicOrPrivate!: number;

	@Column()
	url!: string;

	@Column()
	region!: number;

	@Column()
	state!: string;

	@Column()
	focus!: number;

	@Column()
	setting!: number;

	@Column()
	collegeType!: number;

	@Column()
	collegeSize!: number;

	@Column()
	SATAvg!: number;

	@Column()
	collegeRanking!: number;

	@Column()
	sportsTradition!: number;

	@Column()
	studentFacultyRatio!: number;

	@Column()
	cost!: number;

	@Column()
	collegeAge!: number;
}

@Entity('autoFactTable')
export class AutoTable extends BaseEntity {
	@PrimaryColumn()
	autoID!: string;

	@Column()
	usedOrNew!: number;

	@Column()
	url!: string;

	@Column()
	bodyStyle!: number;

	@Column()
	make!: number;

	@Column()
	age!: number;

	@Column()
	priceRange!: number;

	@Column()
	sellerType!: number;

	@Column()
	mileage!: number;

	@Column()
	color!: number;

	@Column()
	sunroof!: number;

	@Column()
	luxurySeats!: number;

	@Column()
	transmission!: number;

	@Column()
	fuelType!: number;
}

@Entity()
export class User extends BaseEntity {
	@PrimaryColumn()
	userid!: string;
}

@Entity('userBookmark')
export class UserBookmark extends BaseEntity {
	@PrimaryColumn()
	userid!: string;

	@PrimaryColumn()
	domainName!: string;

	@PrimaryColumn()
	bname!: string;

	@Column()
	bookmark!: string;
}
