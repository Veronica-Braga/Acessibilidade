const jwt = require('jsonwebtoken');
const md5 = require('crypto-md5');
const User = require('../Models/User');


exports.createUser = async (req, res) => {
    const { Name,Email,Password,Birthday,Sex,PhoneNumber } = req.body;

    try {
        const newUser = await User.create({
            Name,
            Email,
            Password:md5(Password),
            Birthday,
            Sex,
            PhoneNumber
        })
        res.status(201).json(newUser);
    } catch (err) {
        console.log("Deu Ruim...", err);
        res.status(500).send(err.message)
    }
}


exports.signin = (req, res) => {
    const { user } = req.body;

    const fakeUser = {
        login: 'loginFake',
        pass: md5('senhaFake')
    }

    if (user.login !== fakeUser.login || md5(user.pass) !== fakeUser.pass) {
        res.status(401).json({ message: 'login ou senha incorreto' });
    }

    const jwtPayload = {
        login: user.login,
        role: 'Manager',
        idNumber:'ABC-1235'
    }

    const token = jwt.sign(jwtPayload, process.env.JWT_KEY);
    res.json({
        message: 'Usuario logado com sucesso',
        Token: token
    })
}

