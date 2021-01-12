import path from 'path';

module.exports = {
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'ratinges',
        user: 'postgres',
        password: 'postgres',
        filename: path.resolve(__dirname, 'src', 'database', 'ratinges.pg'),
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
};

