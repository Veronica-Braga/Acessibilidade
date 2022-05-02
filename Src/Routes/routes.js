module.exports = (app) => {
    const userControllers = require("../Controllers/UserController");

    app.route('/signin')
        .get(userControllers.signin)
}