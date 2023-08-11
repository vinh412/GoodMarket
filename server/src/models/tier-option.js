'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TierOption extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            TierOption.TierVariation = TierOption.belongsTo(models.TierVariation, {
                foreignKey: 'tierVariationId'
            });
        }

    }
    TierOption.init({
        tierVariationId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    },
        {
            sequelize,
            modelName: 'TierOption',
        });
    return TierOption;
};