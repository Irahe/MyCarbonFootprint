const errorController = require('../controller/errorController.js');
const efCategoryController = require('../controller/efCategoryController.js');
const loginController = require('../controller/loginController');

module.exports = ({ server, knex, jwt }) => {

    server.post('/ef_category/', function (req, res) {
        try {
            let user = loginController.verifyToken(req, jwt);
            if (user) {
                efCategoryController.create(req, res, knex).catch(error => {
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

        server.get('/ef_category/', function (req, res) {
            try {
                efCategoryController.read(req, res, knex).catch(error => {
                    errorController.returnInternalServerError(error, res);
                });
            } catch (error) {
                console.log(error);
                errorController.returnInternalServerError(error, res);
            }
        }),

        server.put('/ef_category/', function (req, res) {
            try {
                let user = loginController.verifyToken(req, jwt);
                if (user) {

                    efCategoryController.update(req, res, knex).catch(error => {
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