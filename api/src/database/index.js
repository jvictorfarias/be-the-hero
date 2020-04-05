import knex from 'knex';
import databaseConfig from '../../knexfile';

const connection = knex(databaseConfig.development);

export default connection;
