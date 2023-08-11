import express from 'express';
import * as shopController from '../controllers/shop';

const router = express.Router();

router.get('/allshops', shopController.getAllShopsWithAllProducts);

export default router;