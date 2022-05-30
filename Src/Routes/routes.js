const authenticate = require('../Middlewares/auth')
const userControllers = require("../Controllers/UserController");
const AccompaniedControllers = require("../Controllers/AccompaniedController");
const Deficiencycontrollers = require("../Controllers/DeficiencyController");
    
module.exports = (app) => {

    app.route('/signin')
        .get(userControllers.signin)
    
    app.route('/AllUsers')
        .get(authenticate, userControllers.list)
    
    app.route('/user')
        .post(userControllers.createUser)
        .get(authenticate,userControllers.getUser)
        .put(authenticate, userControllers.UpdateUser)
        .delete(authenticate, userControllers.DeleteUser)
    
    app.route('/accompanied')
        .get(authenticate, AccompaniedControllers.getAccompanied)
        .post(AccompaniedControllers.CreateAccompanied)
        .put(authenticate, AccompaniedControllers.UpdateAccompanied)
        .delete(authenticate, AccompaniedControllers.DeleteAccompanied)
    
        app.route('/deficiency')
        .get(authenticate, Deficiencycontrollers.getDeficiency)
        .post(authenticate, Deficiencycontrollers.CreateDeficiency)
        .put(authenticate, Deficiencycontrollers.UpdateDeficiency)
        .delete(authenticate, Deficiencycontrollers.DeleteDeficiency)
}