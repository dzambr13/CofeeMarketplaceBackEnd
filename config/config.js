require("dotenv").config();
module.exports = {
  development: {
    database: "coffee_app_development",
    dialect: "postgres",
  },
  test: {
    database: "coffee_app_test",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true,
      },
    },
  },
};
