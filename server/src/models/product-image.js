'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductImage extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            ProductImage.Product = ProductImage.belongsTo(models.Product, {
                foreignKey: 'productId'
            });
        }

    }
    ProductImage.init({
        productId: {
            allowNull: false,
            type: DataTypes.UUID,
        },
        fileName: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    },
        {
            sequelize,
            modelName: 'ProductImage',
        });
    return ProductImage;
};