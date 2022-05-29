const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    try {
            const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,process.env.JWT_KEY)
    } catch (err) {
        res.status(401).send("Unauthorize!");
    }
    next();
}

module.exports = authenticate;