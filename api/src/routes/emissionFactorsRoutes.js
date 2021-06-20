const errorController = require('../controller/errorController.js');
const emissionFactorsController = require('../controller/emissionFactorsController.js');
const loginController = require('../controller/loginController');

module.exports = ({ server, knex, jwt }) => {

    server.post('/ef/displacement/', function (req, res) {
        try {
            let user = loginController.verifyToken(req, jwt);
            if (user) {
                emissionFactorsController.create(req, res, knex).catch(error => {
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

        server.get('/ef/displacement/', function (req, res) {
            try {
                let user = loginController.verifyToken(req, jwt);
                if (user) {
                    emissionFactorsController.read(req, res, knex).catch(error => {
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

        server.put('/ef/displacement/', function (req, res) {
            try {
                let user = loginController.verifyToken(req, jwt);
                if (user) {

                    emissionFactorsController.update(req, res, knex).catch(error => {
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

        server.get('/ef/aggregated/', function (req, res) {
            try {
                emissionFactorsController.readEmissionFactors(req, res, knex).catch(error => {
                    errorController.returnInternalServerError(error, res);
                });
            } catch (error) {
                console.log(error);
                errorController.returnInternalServerError(error, res);
            }
        })
}