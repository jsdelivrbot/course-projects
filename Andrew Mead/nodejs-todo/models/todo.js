module.exports = function(sequelize, DataTypes) {
  return sequelize.define('todo', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //notEmpty: true
        len: [1, 250] // only valid if length is 1 or greater and less than 250
      }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
};
