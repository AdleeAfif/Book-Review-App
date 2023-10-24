const Sequelize = require("sequelize");

const ratingModel = (db) => {
  return db.define("Rating", {
    id: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.DataTypes.UUIDV4,
    },
    value: {
      type: Sequelize.DataTypes.DECIMAL(10, 2),
      validate: {
        isDecimal: true,
      },
      defaultValue: 0,
    },
  });
};

module.exports = { ratingModel };
