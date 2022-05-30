const jwt = require('jsonwebtoken');
const md5 = require('crypto-md5');
const Experience = require('../Models/Experience');

exports.createExperience = async (req, res) => {
    const { message,rating,localizacao } = req.body;
    const token = req.headers.authorization.split(' ')[1];
    var decode = jwt.decode(token, process.env.JWT_KEY);

    try {
        const newExperience = await Experience.create({
            message,
            rating,
            localizacao,
            userid:decode.idNumber
        })

        res.status(201).json(newExperience);
    } catch (err) {
        console.log("Deu Ruim...", err);
        res.status(500).send(err.message)
    }
}



exports.UpdateExperience = async (req, res) => {
    const { experienceid, message,rating,localizacao } = req.body;
   
    try {
        const newExperience = await Experience.update({
            message,
            rating,
            localizacao,
        }, {
            where: {
            experienceid : experienceid
        }})

        res.status(200).json({
            "Message": "Experience atualizado com sucesso"
        });
    } catch (err) {
        console.log("Deu Ruim...", err);
        res.status(500).send(err.message)
    }
}
exports.DeleteExperience = async (req, res) => {
    const { experienceid } = req.headers
    try {
        var ExperienceDeleted = await Experience.destroy({
            where: {
                experienceid: experienceid
            }
        })

        res.status(200).json({
            "Message": "Experience deletado com sucesso",
            "Experience": ExperienceDeleted
        });
    } catch (err) {
        console.log("Deu Ruim...", err);
        res.status(500).send(err.message)
    }
}

exports.listMyExperiences = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    var decode = jwt.decode(token, process.env.JWT_KEY);

    const ListExperiences = await Experience.findAll({
        where: {
           userid: decode.idNumber
       }
   })
    res.json(ListExperiences)
}


exports.listLocalExperiences = async (req, res) => {
    const { local } = req.headers

    const ListExperiences = await Experience.findAll({
        where: {
           localizacao: local
       }
   })
    res.json(ListExperiences)
}
