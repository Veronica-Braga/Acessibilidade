const authenticate = require('../Middlewares/auth')
const userControllers = require("../Controllers/UserController");
const AccompaniedControllers = require("../Controllers/AccompaniedController");

module.exports = (app) => {

    app.route('/signin')
        .get(userControllers.signin)
    app.route('/user')
        .post(userControllers.createUser)
        .get(authenticate, userControllers.list)
        .put(authenticate, userControllers.UpdateUser)
        .delete(authenticate, userControllers.DeleteUser)
    
    app.route('/accompanied')
        .post(AccompaniedControllers.CreateAccompanied)
}