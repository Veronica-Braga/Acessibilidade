const authenticate = require('../Middlewares/auth')

module.exports = (app) => {
    const userControllers = require("../Controllers/UserController");

    app.route('/signin')
        .get(userControllers.signin)
    app.route('/createUser')
        .post(userControllers.createUser)
    app.route('/user')
        .get(authenticate, userControllers.list)
        .put(authenticate, userControllers.UpdateUser)
        .delete(authenticate, userControllers.DeleteUser)
}