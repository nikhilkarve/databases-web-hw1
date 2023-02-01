import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Schema';
import cors from 'cors';
import { createConnection } from 'typeorm';
import {
	User,
	Domain,
	Property,
	PropertyDetail,
	CollegeTable,
	AutoTable,
	UserBookmark,
} from './Entities/Users';

// this will be main starting point of the application.
// Everything from connecting to db and listening to server will be done from this
const main = async () => {
	await createConnection({
		type: 'mysql',
		database: 'hw1',
		username: 'root',
		password: 'Gohomenow@123',
		logging: true,
		synchronize: false,
		entities: [
			Domain,
			Property,
			PropertyDetail,
			CollegeTable,
			AutoTable,
			User,
			UserBookmark,
		],
	});

	const app = express();
	app.use(cors());
	app.use(express.json());

	app.use(
		'/graphql',
		graphqlHTTP({
			schema,
			graphiql: true,
		})
	);

	app.listen(3002, () => {
		console.log('Server Running on port 3002');
	});
};

main().catch((err) => {
	console.log(err);
});
