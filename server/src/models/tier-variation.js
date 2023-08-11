'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TierVariation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            TierVariation.belongsTo(models.Product, {
                foreignKey: 'productId',
            });
            TierVariation.TierOption = TierVariation.hasMany(models.TierOption, {
                foreignKey: "tierVariationId",
                as: "options"
            })
        }

    }
    TierVariation.init({
        productId: {
            allowNull: false,
            type: DataTypes.UUID,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    },
        {
            sequelize,
            modelName: 'TierVariation',
        });
    return TierVariation;
};