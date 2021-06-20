const errorController = require('../controller/errorController.js');
const loginController = require('../controller/loginController.js');

module.exports = ({ server, errorHandler, knex, jwt }) => {

    server.post('/user/login/', function (req, res) {
        try {
            loginController.userLogin(req, res, knex, jwt).catch(error => {
                errorController.returnInternalServerError(error, res);
            });
        } catch (error) {
            console.log(error);
            errorController.returnInternalServerError(error, res);
        }
    })



}