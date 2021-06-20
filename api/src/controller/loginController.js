
const sha1 = require('sha1');
const dotenv = require('dotenv');
dotenv.config()

module.exports = {
    async "userLogin"(req, res, knex, jwt) {
        let { email, password } = req.body;
        let user = await knex('user').where('email', email).andWhere('password', sha1(password)).first();

        if (user) {
            //autenticated
            delete (user.password);

            jwt.sign({ user }, process.env.SV_SECRET, async (err, token) => {
                if (!err) {
                    res.send({ status: "success", data: { user, token } });
                } else {
                    throw new Error('Token could not be signed.');
                }

            });

        } else {
            //não autenticou
            throw Error('User not found.')
        }

    },

    verifyToken(req, jwt) {
        let bearerHeader = req.headers['authorization'];
        if (bearerHeader) {
            const tkn = bearerHeader.split(' ')[1];
            let user = jwt.verify(tkn, process.env.SV_SECRET, (err, tokenData) => {
                if (err) {
                    return false;
                } else {
                    return tokenData.user;
                }
            });
            return user;
        } else {
            return false;
        }
    }
}
