module.exports = {
    returnInternalServerError(error, res) {
        let response = {
            status: 'fail',
            message: error.message,
            stack: error.stack
        }
        console.log(error);//may log on a external file or use logger
        res.send(response);
    }
}