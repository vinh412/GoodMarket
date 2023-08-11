import { v4 as uuidv4 } from 'uuid';
const path = require('path');
import * as productImageService from "../services/product-image"
import * as productService from "../services/product"



export const createProduct = async (req, res) => {
    // handle store images
    const filenames = [];
    const images = req.files.images;
    images.forEach((image) => {
        // use uuidv4 for generate filename of image
        let filename = `${uuidv4()}.${image.name.split('.')[1]}`;
        // move image to public/images/product folder
        image.mv(path.resolve(__dirname, '../', 'public', 'images', 'product', filename));
        filenames.push({fileName: filename});
    });
    console.log(req.body.tier_variations);
    try {
        const product = await productService.createProduct({
            ...req.body,
            tier_variations: JSON.parse(req.body.tier_variations),
            models: JSON.parse(req.body.models),
            images: filenames,
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const test = async (req, res) => {
    try {
        const product = await productService.createProductTest(req.body);
        res.status(201).json(product);
    }catch (error) {
        res.status(500).json({ error: error });
    }
};

export const getProductById = async (req, res) => {
    const {id} = req.body;
    try{
        const product = await productService.getProductById(id);
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({error: error});
    }
}

export const getAll = async (req, res) => {
    try {
        const products = await productService.getAll();
        res.status(200).json({data: products});
    }catch(error){
        req.status(500).json({error: error});
    }
}