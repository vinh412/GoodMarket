import express from 'express'
import * as authController from '../controllers/auth'

const router = express.Router()

router.get('/', authController.checkUser)
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)

export default router