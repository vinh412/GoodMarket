const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
import db from '../models';

export const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const token = req.cookies.jwt;
  
  if (!token) {
    return res.status(401).json({ error: 'Authorization token required' })
  }

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await db.User.findOne({
      where: {
        id: id
      }
    })
    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({ error: 'Request is not authorized' })
  }
}
