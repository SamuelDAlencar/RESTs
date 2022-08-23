module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    restaurantId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Item',
  });

  return Item;
};
