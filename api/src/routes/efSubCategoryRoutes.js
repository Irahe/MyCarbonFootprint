const errorController = require('../controller/errorController.js');
const efSubCategoryController = require('../controller/efSubCategoryController.js');
const loginController = require('../controller/loginController');

module.exports = ({ server, knex, jwt }) => {

    server.post('/ef_sub_category/', function (req, res) {
        try {
            let user = loginController.verifyToken(req, jwt);
            if (user) {
                efSubCategoryController.create(req, res, knex).catch(error => {
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

        server.get('/ef_sub_category/', function (req, res) {
            try {
                let user = loginController.verifyToken(req, jwt);
                if (user) {
                    efSubCategoryController.read(req, res, knex).catch(error => {
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

        server.put('/ef_sub_category/', function (req, res) {
            try {
                let user = loginController.verifyToken(req, jwt);
                if (user) {

                    efSubCategoryController.update(req, res, knex).catch(error => {
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