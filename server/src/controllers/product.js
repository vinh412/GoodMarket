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

    try {
        const product = await productService.createProduct({
            ...req.body,
            images: filenames,
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const test = async (req, res) => {
    console.log(req.files);
    return res.status(200).json({msg: "OK"});
};