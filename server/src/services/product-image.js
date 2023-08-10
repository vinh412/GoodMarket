import db from '../models';
const {Op} = require('sequelize');

export const createBulkProductImages = (images) => new Promise(async(resolve, reject) => {
    try{
        console.log(images);
        const response = await db.ProductImage.bulkCreate(images);

        resolve({
            err: response ? 0 : 1,
            response
        });
    } catch (error){
        reject(error);
    }
});