const authenticate = require('../Middlewares/auth')
const userControllers = require("../Controllers/UserController");
const AccompaniedControllers = require("../Controllers/AccompaniedController");
const Deficiencycontrollers = require("../Controllers/DeficiencyController");
const ExperienceControllers = require("../Controllers/ExperienceController");

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
    
        app.route('/localexperience')
        .get(authenticate, ExperienceControllers.listLocalExperiences)
    
    
        app.route('/experience')
        .get(authenticate, ExperienceControllers.listMyExperiences)
        .post(authenticate, ExperienceControllers.createExperience)
        .put(authenticate, ExperienceControllers.UpdateExperience)
        .delete(authenticate, ExperienceControllers.DeleteExperience)
}