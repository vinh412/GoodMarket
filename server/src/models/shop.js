'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Shop extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Shop.Product = Shop.hasMany(models.Product, {
                foreignKey: 'shopId',
                as: 'products'
            });
        }

        static async getShopById(userId) {
            const shop = await this.findOne({
              where: {
                userId: userId
              }
            });
            return shop;
          }

    }
    Shop.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        userId: {
            allowNull: false,
            type: DataTypes.UUID,
        },
        name: {
            type: DataTypes.STRING
        },
        displayName: {
            type: DataTypes.STRING
        },
        avatar: {
            type: DataTypes.STRING
        },
        background: {
            type: DataTypes.STRING
        },
    },
        {
            sequelize,
            modelName: 'Shop',
        });
    return Shop;
};