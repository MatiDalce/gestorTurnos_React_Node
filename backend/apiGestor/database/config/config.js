module.exports = {
    "development": {
      "username":process.env.DB_USER,
      "password": null,
      "database": process.env.DB_NAME,
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": process.env.DB_USER,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_NAME,
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": process.env.DB_USER,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_NAME,
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }