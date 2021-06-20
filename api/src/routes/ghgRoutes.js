const errorController = require('../controller/errorController.js');
const ghgController = require('../controller/ghgController.js');
const loginController = require('../controller/loginController');

module.exports = ({ server, knex, jwt }) => {

    server.post('/ghg/', function (req, res) {
        try {
            let user = loginController.verifyToken(req, jwt);
            if (user) {
                ghgController.create(req, res, knex).catch(error => {
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

        server.get('/ghg/', function (req, res) {
            try {
                let user = loginController.verifyToken(req, jwt);
                if (user) {
                    ghgController.read(req, res, knex).catch(error => {
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

        server.put('/ghg/', function (req, res) {
            try {
                let user = loginController.verifyToken(req, jwt);
                if (user) {

                    ghgController.update(req, res, knex).catch(error => {
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