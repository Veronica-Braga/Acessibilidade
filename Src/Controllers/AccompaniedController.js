const Accompanied = require('../Models/Accompanied');
const User = require('../Models/User');
const  Deficiency = require('../Models/Deficiency');

exports.CreateAccompanied = async (req,res) => {
    const { name,birthday,sex, deficiencyid } = req.body;
    try {
        const newAccompanied = await Accompanied.create({
            name,
            birthday,
            sex,
            deficiencyid
        })

        res.status(201).json(newAccompanied);
    } catch (err) {
        console.log("Deu Ruim...", err);
        res.status(500).send(err.message)
    }
}

exports.UpdateAccompanied = async (req, res) => {
    const { accompaniedid,name, birthday, sex } = req.body;
    
    try {
        await Accompanied.update({
            name,
            birthday,
            sex,
        }, {
            where: {
                accompaniedid: accompaniedid
            }
        })

        res.status(200).json({
            "Message": "Acompanhante atualizado com sucesso"
        });
    } catch (err) {
        console.log("Deu Ruim...", err);
        res.status(500).send(err.message)
    }
}

exports.DeleteAccompanied = async (req, res) => {
    const { accompaniedid } = req.headers;

    try {
        var deficiencyDeleted = await Accompanied.destroy({
            where: {
                accompaniedid: accompaniedid
            }
        })

        res.status(200).json({
            "Message": "Acompanhante deletado com sucesso",
            "User": userDeleted
        });
    } catch (err) {
        console.log("Deu Ruim...", err);
        res.status(500).send(err.message)
    }
}
exports.getAccompanied = async (req, res) => {
    const { accompaniedid } = req.headers
    try{
      const accompanied_bd = await Accompanied.findByPk(accompaniedid, {
        include: [{ model: Deficiency}],
      })
      res.json({message: 'Ok, deu certo!', user: accompanied_bd})
    } catch (err) {
      console.log(err)
    }
  
  }