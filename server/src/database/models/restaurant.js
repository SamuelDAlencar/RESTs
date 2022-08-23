module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Restaurant',
  });

  Restaurant.associate = ({ item }) => {
    Restaurant.hasMany(item, {
      foreignKey: 'id',
      as: 'items',
      onDelete: 'CASCADE'
    });
  };

  return Restaurant;
};
