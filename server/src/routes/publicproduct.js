import express from 'express';
import * as productController from '../controllers/product';

const router = express.Router();

router.post('/', productController.getProductById);
router.get('/getall', productController.getAll);
router.post('/test', productController.test);

export default router;