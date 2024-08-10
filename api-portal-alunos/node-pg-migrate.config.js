module.exports = {
  migrations: {
    directory: 'migrations', // Diretório onde as migrações serão armazenadas
  },
  driver: 'pg',
  connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
};