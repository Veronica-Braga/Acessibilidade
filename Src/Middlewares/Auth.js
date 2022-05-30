const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        var valid = jwt.verify(token,process.env.JWT_KEY)
    } catch (err) {
        res.status(401).send("Unauthorize!");
    }
    if (valid) {
        next();
    }
}

module.exports = authenticate;