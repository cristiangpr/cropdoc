'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.BIGINT
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};