require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USERNAME_BANCO,
    password: process.env.PASSWORD_BANCO,
    database: process.env.DATABASE_BANCO,
    host: process.env.HOST_BANCO,
    port: process.env.PORT_BANCO,
    dialect: mysql,
    timezone: "-03:00",
    dialectOptions: {
      dateStrings: true,
      typeCast: true
    },
  },
  test: {
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
  production: {
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
};
