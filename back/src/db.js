require("dotenv").config();

const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { users, favorites } = require("./models");
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/bucaramanga`,
  { logging: false, native: false }
);

users(sequelize);
favorites(sequelize);

const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: 'UserFavorite', timestamps: false });
Favorite.belongsToMany(User, { through: 'UserFavorite', timestamps: false });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};



