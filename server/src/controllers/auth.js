import db from '../models'
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const maxAge = 3 * 24 * 60 * 60;

const handleError = (err) => {
    let error;

    // incorrect email
    if (err.message === 'Incorrect email') {
        error = 'That email is not registered';
    }

    // incorrect password
    else if (err.message === 'Incorrect password') {
        error = 'That password is incorrect';
    }

    // duplicate email error
    else if (err.name === 'SequelizeUniqueConstraintError') {
        error = 'Email already exists';
    }

    // validation errors
    else if (err.name === 'SequelizeValidationError') {
        error = err.errors[0].message
    }

    else {
        error = 'Something went wrong';
    }

    return error;
};
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge });
}

// check current user
export const checkUser = (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: "Invalid token", user: null });
            } else {
                let user = await db.User.findOne({
                    attributes: ['id', 'email', 'lastname', 'firstname'],
                    where: {
                        id: decodedToken.id
                    }
                });
                return res.status(200).json({ user: user });
            }
        });
    } else {
        return res.status(401).json({ user: null, message: 'No token found' });
    }
};

export const register = async (req, res) => {
    let { email, password, lastname, firstname } = req.body;
    if (!email || !password || !lastname || !firstname) {
        return res.status(400).json({
            error: 'Email, password, lastname and firstname are required'
        });
    }
    try {
        const user = await db.User.create({ email, password, lastname, firstname });
        const token = createToken(user.id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: { id: user.id, email, lastname, firstname }, shop: null });
    } catch (err) {
        const error = handleError(err)
        res.status(500).json({ error });
    }
};

export const login = async (req, res) => {
    let { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            error: 'Email and password are required'
        });
    }

    try {
        // const user = await db.User.findOne({
        //     where: {
        //         email: email
        //     }
        // });
        // if (!user) {
        //     return res.status(401).json({
        //         error: 'That email is not registered'
        //     });
        // }
        // const isValidPassword = bcrypt.compareSync(password, user.password);
        // if (!isValidPassword) {
        //     return res.status(401).json({
        //         error: 'That password is incorrect'
        //     });
        // }
        const user = await db.User.login(email, password);
        const shop = await db.Shop.getShopById(user.id);

        const token = createToken(user.id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({
            user: {
                id: user.id,
                email: user.email,
                lastname: user.lastname,
                firstname: user.firstname
            },
            shop: shop
        });
    } catch (err) {
        console.log(err);
        const error = handleError(err)
        res.status(401).json({ error });
    }
};

export const logout = (req, res) => {
    res.cookie('jwt', 'none', {
        expires: new Date(Date.now() + 5 * 1000),
        httpOnly: true,
    })
    return res.status(200).json({ success: true, message: 'User logged out successfully' })
}