const  Deficiency = require('../Models/Deficiency');

exports.CreateDeficiency = async (req,res) => {
    const { type,degree } = req.body;
    try {
        const newDeficiency = await Deficiency.create({
            type,
            degree,
        })

        res.status(201).json(newDeficiency);
    } catch (err) {
        console.log("Deu Ruim...", err);
        res.status(500).send(err.message)
    }
}

exports.UpdateDeficiency = async (req, res) => {
    const { deficiencyid, type,degree } = req.body;
    try {
        await Deficiency.update({
            type,
            degree,
        },{
            where: {
                deficiencyid: deficiencyid
            }
        })

        res.status(200).json({
            "Message": "Deficiencia atualizado com sucesso"
        });
    } catch (err) {
        console.log("Deu Ruim...", err);
        res.status(500).send(err.message)
    }
}

exports.DeleteDeficiency = async (req, res) => {
    const { deficiencyid } = req.headers;

    try {
        var deficiencyDeleted = await Deficiency.destroy({
            where: {
                deficiencyid: deficiencyid
            }
        })

        res.status(200).json({
            "Message": "Deficiencia deletado com sucesso",
            "User": deficiencyDeleted
        });
    } catch (err) {
        console.log("Deu Ruim...", err);
        res.status(500).send(err.message)
    }
}
exports.getDeficiency = async (req, res) => {
    const { deficiencyid } = req.headers
    try{
      const Deficiency_bd = await Deficiency.findByPk(deficiencyid)
      res.json({message: 'Ok, deu certo!', user: Deficiency_bd})
    } catch (err) {
      console.log(err)
    }
  
  }