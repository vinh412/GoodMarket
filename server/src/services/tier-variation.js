import db from '../models'
const {Op} = require('sequelize')

// CREATE
export const createTierVariation = (tierVariation) => new Promise(async(resolve, reject) => {
    try{
        console.log(tierVariation);
        const response = await db.TierVariation.create(tierVariation);

        resolve({
            err: response ? 0 : 1,
            response
        })
    } catch (error){
        reject(error)
    }
})

// GET
export const getAllTierVariations = (productId) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.TierVariation.findAll({
            where: {productId: productId}
        });
       
        resolve({
            err: response ? 0 : 1,
            response
        })
    } catch (error){
        reject(error)
    }
}) 

