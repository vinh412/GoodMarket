import express from 'express'
import * as shopController from '../controllers/shop'
import { requireAuth } from '../middleware/auth';

const router = express.Router()

router.use(requireAuth)

router.get('/', shopController.getShop);
router.post('/createShop', shopController.createShop);
router.post('/updateProfile', shopController.updateProfileShop);

export default router