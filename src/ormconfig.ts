import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, POSTGRES_HOST } = process.env;
const LOCAL_URL = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`;

export default {
  type: 'postgres',
  cache: false,
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT as string, 10) as number,
  url: (process.env.DATABASE_URL as string) || LOCAL_URL,
  username: process.env.POSTGRES_USER as string,
  password: process.env.POSTGRES_PASSWORD as string,
  database: process.env.POSTGRES_DB as string,
  synchronize: false,
  logging: false,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
  entities: ['src/resources/**/**.entity{.ts,.js}'],
  migrations: ['./migrations/*.ts'],
} as ConnectionOptions;
