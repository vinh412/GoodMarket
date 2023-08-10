import express from 'express';
import * as productController from '../controllers/product';

const router = express.Router();

router.post('/add', productController.createProduct);
router.post('/test', productController.test);

export default router;