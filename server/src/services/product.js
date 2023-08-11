import db from '../models'
const { Op } = require('sequelize')

export const createProductTest = (product) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Product.create(product);

        for(let i=0;i<product.tier_variations.length;i++){
            const tierVariation = await db.TierVariation.create({
                productId: response.id,
                name: product.tier_variations[i].name
            });

            for(let j=0;j<product.tier_variations[i].options.length;j++) {
                const optionTier = await db.TierOption.create({
                    tierVariationId: tierVariation.id,
                    name: product.tier_variations[i].options[j].name
                });
            }
        }

        resolve(response);
    } catch (error) {
        reject(error)
    }
})

// CREATE
export const createProduct = (product) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Product.create(product, {
            include: [
                {
                    association: db.Product.ProductImage
                },
                {
                    association: db.Product.ProductModel
                }
            ]
        });

        for(let i=0;i<product.tier_variations.length;i++){
            const tierVariation = await db.TierVariation.create({
                productId: response.id,
                name: product.tier_variations[i].name
            });

            for(let j=0;j<product.tier_variations[i].options.length;j++) {
                const optionTier = await db.TierOption.create({
                    tierVariationId: tierVariation.id,
                    name: product.tier_variations[i].options[j].name
                });
            }
        }

        resolve(response);
    } catch (error) {
        reject(error)
    }
})

// GET ALL
export const getAllProducts = (shopId) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Product.findAll({
            where: { shopId: shopId }
        });

        resolve({
            err: response ? 0 : 1,
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const getAll = () => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Product.findAll({
            include: {
                model: db.ProductImage,
                as: 'images',
            }
        });

        resolve(response);
    } catch (error){
        reject(error);
    }
});

// GET
export const getProductById = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Product.findOne({
            where: { id: id },
            include: [
                {
                    association: db.Product.Shop,
                    as: 'shop'
                },
                {
                    model: db.ProductModel,
                    as: 'models'
                },
                {
                    model: db.ProductImage,
                    as: 'images'
                },
                {
                    model: db.TierVariation,
                    as: 'tier_variations',
                    include: [{
                        model: db.TierOption,
                        as: 'options'
                    }]
                }
            ]
        });

        resolve(response);
    } catch (error) {
        reject(error)
    }
})

