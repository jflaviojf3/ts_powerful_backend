require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USERNAME_BANCO,
    password: process.env.PASSWORD_BANCO,
    database: process.env.DATABASE_BANCO,
    host: process.env.HOST_BANCO,
    port: process.env.PORT_BANCO,
    dialect: process.env.DIALECT_BANCO,
    timezone: "-03:00",
    dialectOptions: {
      dateStrings: true,
      typeCast: true
    },

  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
};
