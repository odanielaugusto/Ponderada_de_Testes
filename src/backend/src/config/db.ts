import pg from 'pg';
const { Pool } = pg;

import dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
  DB_USER: string;
  DB_HOST: string;
  DB_NAME: string;
  DB_PASSWORD: string;
  DB_PORT: string;
}
const config = process.env as unknown as EnvConfig;

const pool = new Pool({
  user: config.DB_USER,
  host: config.DB_HOST,
  database: config.DB_NAME,
  password: config.DB_PASSWORD,
  port: parseInt(config.DB_PORT, 10),
  ssl: {
    rejectUnauthorized: false,
  },
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 20000,
});


export default pool;
