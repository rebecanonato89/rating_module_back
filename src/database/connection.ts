import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'ratinges',
        user: 'postgres',
        password: 'postgres',
        filename: path.resolve(__dirname, 'ratinges.pg'),
    },
});

export default db;