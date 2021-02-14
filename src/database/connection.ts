import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'pg',
    connection: {
        host: 'ec2-67-202-63-147.compute-1.amazonaws.com',
        database: 'd4j6i5vcg8hnj5',
        user: 'profgphculzqid',
        password: 'a61d70b1a8270bd8882925da503f9022e44f98434658138ac5307952242baf2e',
        filename: path.resolve(__dirname, 'ratinges.pg'),
    },
});

export default db;