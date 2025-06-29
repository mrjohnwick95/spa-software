const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.PG_DATABASE,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    dialect: 'postgres',
    port: process.env.PG_PORT,
    logging: false,
  }
);

const connectPostgres = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a PostgreSQL exitosa');
  } catch (error) {
    console.error('Error en PostgreSQL:', error);
  }
};

module.exports = connectPostgres;
