import { Client } from 'pg';

/**
 * Not going to use .env for this project.
 */
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'fish_database',
    user: 'postgres',
    password: 'postgres',
});

/**
 * Connect to the PostgreSQL database.
 */
client.connect();

/**
 * The connection to the PostgreSQL database.
 */
export { client };
