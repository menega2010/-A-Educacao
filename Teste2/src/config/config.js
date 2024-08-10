import dotenv from 'dotenv';
dotenv.config();

export default {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: console.log,
    port: parseInt(process.env.DB_PORT, 10)  // Certifique-se de que a porta é um número
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'database_test',
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: parseInt(process.env.DB_PORT, 10),
    logging: console.log
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'database_production',
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: parseInt(process.env.DB_PORT, 10),
    logging: console.log
  }
};
