const Sequelize = require("sequelize");

const commentModel = (db) => {
  return db.define("Comment", {
    id: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.DataTypes.UUIDV4,
    },
    comment: {
      type: Sequelize.DataTypes.TEXT,
    },
  });
};

module.exports = { commentModel };
