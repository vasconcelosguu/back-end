import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const database = process.env.DATABASE || 'default_database';
const username = process.env.USERNAME || 'default_username';
const password = process.env.PASSWORD || 'default_password';
const host = process.env.HOST || 'default_host';

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

export { sequelize };