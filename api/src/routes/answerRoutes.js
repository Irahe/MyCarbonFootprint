const errorController = require('../controller/errorController.js');
const answerController = require('../controller/answerController.js');

module.exports = ({ server, knex, jwt }) => {

    server.post('/answer/', function (req, res) {
        try {
            answerController.process(req, res, knex).catch(error => {
                errorController.returnInternalServerError(error, res);
            });
        } catch (error) {
            console.log(error);
            errorController.returnInternalServerError(error, res);
        }
    })
}