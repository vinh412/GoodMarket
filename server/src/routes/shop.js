import express from 'express';
import * as shopController from '../controllers/shop';
import { requireAuth } from '../middleware/auth';
import productRoute from './product';

const router = express.Router();

router.use(requireAuth);

router.get('/', shopController.getShop);
router.post('/createShop', shopController.createShop);
router.post('/updateProfile', shopController.updateProfileShop);
router.use('/product', productRoute);

export default router;