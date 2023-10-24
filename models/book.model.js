const Sequelize = require("sequelize");

const bookModel = (db) => {
  return db.define("Book", {
    id: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.DataTypes.UUIDV4,
    },
    title: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
    },
  });
};

module.exports = { bookModel };
