const errorController = require('../controller/errorController.js');
const userController = require('../controller/userController.js');
const loginController = require('../controller/loginController');

module.exports = ({ server, knex, jwt }) => {

    server.post('/user/', function (req, res) {
        try {
            let user = loginController.verifyToken(req, jwt);
            if (user) {
                userController.create(req, res, knex).catch(error => {
                    errorController.returnInternalServerError(error, res);
                });
            } else {
                throw new Error('Invalid Token');
            }
        } catch (error) {
            console.log(error);
            errorController.returnInternalServerError(error, res);
        }
    }),

        server.get('/user/', function (req, res) {
            try {
                let user = loginController.verifyToken(req, jwt);
                if (user) {
                    userController.read(req, res, knex).catch(error => {
                        errorController.returnInternalServerError(error, res);
                    });
                } else {
                    throw new Error('Invalid Token');
                }
            } catch (error) {
                console.log(error);
                errorController.returnInternalServerError(error, res);
            }
        }),

        server.put('/user/', function (req, res) {
            try {
                let user = loginController.verifyToken(req, jwt);
                if (user) {

                    userController.update(req, res, knex).catch(error => {
                        errorController.returnInternalServerError(error, res);
                    });

                } else {
                    throw new Error('Invalid Token');
                }


            } catch (error) {
                console.log(error);
                errorController.returnInternalServerError(error, res);
            }
        }),

        server.del('/user/', function (req, res) {
            try {
                let user = loginController.verifyToken(req, jwt);
                if (user) {

                    userController.delete(req, res, knex).catch(error => {
                        errorController.returnInternalServerError(error, res);
                    });

                } else {
                    throw new Error('Invalid Token');
                }

            } catch (error) {
                console.log(error);
                errorController.returnInternalServerError(error, res);
            }
        })



}