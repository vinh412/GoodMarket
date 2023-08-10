import db from '../models'
const {Op} = require('sequelize')

// CREATE
export const createTierOption = (option) => new Promise(async(resolve, reject) => {
    try{
        console.log(option);
        const response = await db.TierOption.create(option);

        resolve({
            err: response ? 0 : 1,
            response
        })
    } catch (error){
        reject(error)
    }
})

// GET
export const getAllTierOptions = (tierId) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.TierOption.findAll({
            where: {tierId: tierId}
        });
       
        resolve({
            err: response ? 0 : 1,
            response
        })
    } catch (error){
        reject(error)
    }
}) 

