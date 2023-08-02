import db from '../models'
import { v4 as uuidv4 } from 'uuid';
const path = require('path')

export const createShop = async (req, res) => {
    let userId = req.user.id;
    const shop = await db.Shop.findOne({
        where: {
            userId: userId
        }
    });
    if(shop){
        return res.status(400).json({error: 'This account already create shop'});
    }
    let { name, displayName } = req.body;
    if (!userId || !name || !displayName) {
        return res.status(400).json({
            error: 'Name and display name must be provided'
        });
    }
    try {
        const shop = await db.Shop.create({ userId, name, displayName });
        res.status(201).json({ shop: { id: shop.id, name, displayName } });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const getShop = async (req, res) => {
    let userId = req.user.id;
    try{
        const shop = await db.Shop.findOne({
            where: {
                userId: userId
            }
        });
    
        if(shop){
            return res.status(200).json({shop: shop});
        }else{
            return res.status(200).json({ shop: null});
        }
    }catch(error) {
        return res.status(500).json(error);
    }
};

export const updateProfileShop = async (req, res) => {
    const userId = req.user.id;
    const { displayName } = req.body;
    if(!req.files){
        await db.Shop.update({ displayName: displayName }, {
            where: {
                userId: userId
            }
        });
        return res.status(200).json({ message: 'Update displayname success!' });
    }
    const { avatar, background } = req.files;

    // use uuidv4 for generate filename of image
    const avatarFilename = `${uuidv4()}.${avatar.name.split('.')[1]}`;
    const backgroundFilename = `${uuidv4()}.${background.name.split('.')[1]}`;

    // move image to public/images folder
    avatar.mv(path.resolve(__dirname, '../', 'public', 'images', avatarFilename));
    background.mv(path.resolve(__dirname, '../', 'public', 'images', backgroundFilename));

    // save image filename to database
    await db.Shop.update({ displayName: displayName, avatar: avatarFilename, background: backgroundFilename }, {
        where: {
            userId: userId
        }
    });

    res.status(200).json({message: 'Update displayname, avatar, background success'});
};