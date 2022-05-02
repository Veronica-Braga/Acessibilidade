const jwt = require('jsonwebtoken');
const md5 = require('crypto-md5');

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