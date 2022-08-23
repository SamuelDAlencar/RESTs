module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('item', {
    name: DataTypes.STRING,
    restaurantId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {
    timestamps: false,
    sequelize,
    modelName: 'item',
  });

  Item.associate = ({ restaurant }) => {
    Item.belongsTo(restaurant, {
      foreignKey: 'restaurantId',
      as: 'restaurant',
      onDelete: 'CASCADE'
    });
  };

  return Item;
};
