import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error('DATABASE_URL not found in environment variables.');
  process.exit(1);
}

console.log(databaseUrl);

let sequelize: Sequelize;

try {
  sequelize = new Sequelize("postgres://default:Xuxf3NO6BeHz@ep-shy-meadow-a432gxcz.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require", {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} catch (error) {
  console.error('Failed to create Sequelize instance:', error);
}

export { sequelize }