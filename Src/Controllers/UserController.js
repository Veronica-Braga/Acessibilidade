const jwt = require('jsonwebtoken');
const md5 = require('crypto-md5');
const User = require('../Models/User');
const Accompanied = require('../Models/Accompanied');
const Deficiency = require('../Models/Deficiency');

exports.createUser = async (req, res) => {
    const { name,email,password,birthday,sex,phonenumber,accompaniedid } = req.body;

    try {
        const newUser = await User.create({
            name,
            email,
            password:md5(password),
            birthday,
            sex,
            phonenumber,
            accompaniedid
        })

        res.status(201).json(newUser);
    } catch (err) {
        console.log("Deu Ruim...", err);
        res.status(500).send(err.message)
    }
}


exports.signin = async (req, res) => {
    const { user } = req.body;

    const user_db = await User.findOne({
        where: {
           email: user.login
       }
   })

   if (user.login === user_db.email && md5(user.password) === user_db.password) {

    const jwtPayload = {
        name: user_db.name,
        email: user_db.email,
        role: 'Manager',
        idNumber: user_db.userid
    }
    const token = jwt.sign(jwtPayload, process.env.JWT_KEY);
    res.json({
        message: 'Usuario logado com sucesso',
        Token: token
    })
    } else {
        res.status(401).json({ message: 'login ou senha incorreto' });
    }
}
exports.UpdateUser = async (req, res) => {
    const { name,email,birthday,sex,phonenumber,accompaniedid } = req.body;
    const token = req.headers.authorization.split(' ')[1];
    var decode = jwt.decode(token, process.env.JWT_KEY);
    try {
        await User.update({
            name,
            email,
            birthday,
            sex,
            phonenumber,
            accompaniedid
        }, {
            include: [{ model: Deficiency}],
            where: {
                userid: decode.idNumber
            }
        })

        res.status(200).json({
            "Message": "Usuario atualizado com sucesso"
        });
    } catch (err) {
        console.log("Deu Ruim...", err);
        res.status(500).send(err.message)
    }
}
exports.DeleteUser = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    var decode = jwt.decode(token, process.env.JWT_KEY);
    try {
        var userDeleted = await User.destroy({
            where: {
                userid: decode.idNumber
            }
        })

        res.status(200).json({
            "Message": "Usuario deletado com sucesso",
            "User": userDeleted
        });
    } catch (err) {
        console.log("Deu Ruim...", err);
        res.status(500).send(err.message)
    }
}

exports.list = async (req, res) => {
    const ListUsers = await User.findAll({
        include: ['Deficiency','Accompanied'],
      attributes: { exclude: ['password','userid'] }
    })
    res.json(ListUsers)
}

exports.getUser = async (req, res) => {
    const { userid } = req.headers
    try{
      const user_bd = await User.findByPk(userid, {
        include: ['Deficiency','Accompanied'],
          attributes: { exclude: ['password'] }
      })
      res.json({message: 'Ok, deu certo!', user: user_bd})
    } catch (err) {
      console.log(err)
    }
  
  }