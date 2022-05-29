const authenticate = require('../../Middlewares/auth')

module.exports = (app) => {
    const userControllers = require("../Controllers/UserController");

    app.route('/signin')
        .get(authenticate, userControllers.signin)
    app.route('/createUser')
        .post(userControllers.createUser)
}