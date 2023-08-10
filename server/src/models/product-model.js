'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductModel extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            ProductModel.Product = ProductModel.belongsTo(models.Product);
        }

    }
    ProductModel.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        productId: {
            allowNull: false,
            type: DataTypes.UUID,
        },
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        sold: {
            type: DataTypes.INTEGER
        },    
    },
        {
            sequelize,
            modelName: 'ProductModel',
        });
    return ProductModel;
};