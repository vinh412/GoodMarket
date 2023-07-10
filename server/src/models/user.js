'use strict';
import bcrypt from 'bcrypt'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async login(email, password) {
      const user = await this.findOne({
        where: {
          email: email
        }
      });
      if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if(auth) {
          return user;
        }
        throw Error('Incorrect password');
      }
      throw Error('Incorrect email');
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: "Please enter a valid email address!"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8],
          msg: "Password must be at least 8 characters long"
        }
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
    {
      hooks: {
        beforeCreate: async (user) => {
          const salt = await bcrypt.genSalt();
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
      sequelize,
      modelName: 'User',
    });
  return User;
};