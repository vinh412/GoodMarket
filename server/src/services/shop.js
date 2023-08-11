import db from '../models'
const {Op} = require('sequelize')

export const getShop = (userId) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.Shop.findOne({
            where: {userId: userId}
        });
       
        resolve(response);
    } catch (error){
        reject(error);
    }
}) 

export const getAllShopsWithAllProducts = () => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Shop.findAll({
            include: {
                model: db.Product,
                as: 'products',
            }
        });

        resolve(response);
    } catch (error){
        reject(error);
    }
});