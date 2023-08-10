import db from '../models'
const {Op} = require('sequelize')

// CREATE
export const createProduct = (product) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.Product.create(product, {
            include: [
                {
                    association: db.Product.ProductImage
                }, 
                {
                    association: db.Product.TierVariation,
                    include: [db.TierVariation.TierOption]
                },
                {
                    association: db.Product.ProductModel
                }
            ]
        });

        resolve({
            err: response ? 0 : 1,
            response
        })
    } catch (error){
        reject(error)
    }
})

// GET ALL
export const getAllProducts = (shopId) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.Product.findAll({
            where: {shopId: shopId}
        });
       
        resolve({
            err: response ? 0 : 1,
            response
        })
    } catch (error){
        reject(error)
    }
}) 

// GET
export const getProduct = (productId) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.Product.findOne({
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

