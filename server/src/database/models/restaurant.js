module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {
    timestamps: false,
    sequelize,
    modelName: 'restaurant',
  });

  Restaurant.associate = ({ item }) => {
    Restaurant.hasMany(item, {
      foreignKey: 'restaurantId',
      as: 'items',
      onDelete: 'CASCADE'
    });
  };

  return Restaurant;
};
