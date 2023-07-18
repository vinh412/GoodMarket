import db from '../models'


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