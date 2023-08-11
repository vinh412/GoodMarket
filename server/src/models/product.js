'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.ProductImage = Product.hasMany(models.ProductImage, {
                foreignKey: "productId",
                as: "images"
            });
            Product.TierVariation = Product.hasMany(models.TierVariation, {
                foreignKey: "productId",
                as: "tier_variations"
            });
            Product.ProductModel = Product.hasMany(models.ProductModel, {
                foreignKey: "productId",
                as: "models"
            });
            Product.Shop = Product.belongsTo(models.Shop, {
                foreignKey: "shopId",
                as: 'shop'
            });
        }

    }
    Product.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        shopId: {
            allowNull: false,
            type: DataTypes.UUID,
        },
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        minPrice: {
            type: DataTypes.INTEGER
        },
        maxPrice: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        rating: {
            type: DataTypes.FLOAT
        },
        numberReviews: {
            type: DataTypes.INTEGER
        },
        sold: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
    },
        {
            hooks: {
                beforeCreate: (product) => {
                    if(product.models && product.models.length > 0) {
                        let minPrice = Number(product.models[0].price);
                        let maxPrice = Number(product.models[0].price);
                        let quantity = 0;
                        product.models.forEach(model => {
                            let modelPrice = Number(model.price);
                            if(minPrice > modelPrice){
                                minPrice = modelPrice;
                            }
                            if(maxPrice < modelPrice){
                                maxPrice = modelPrice;
                            }
                            quantity = quantity + Number(model.quantity);
                        });
                        product.maxPrice = maxPrice;
                        product.minPrice = minPrice;
                        product.quantity = quantity;
                    }
                }
            },
            sequelize,
            modelName: 'Product',
        });
    return Product;
};