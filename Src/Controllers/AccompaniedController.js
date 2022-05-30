const Accompanied = require('../Models/Accompanied');
const User = require('../Models/User');

exports.CreateAccompanied = async (req,res) => {
    const { name,birthday,sex} = req.body;
    try {
        const newAccompanied = await Accompanied.create({
            name,
            birthday,
            sex
        })

        res.status(201).json(newAccompanied);
    } catch (err) {
        console.log("Deu Ruim...", err);
        res.status(500).send(err.message)
    }
}