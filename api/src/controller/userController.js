const sha1 = require('sha1');


module.exports = {
    async create(req, res, knex) {
        let { email, name, password } = req.body;

        let dto = {
            email,
            name,
            password: sha1(password)
        }
        await knex('user').insert(dto);

        res.json({ status: "success", data: {} });
    },

    async read(req, res, knex) {
        let dtos = await knex('user').select();

        res.json({ status: "success", data: dtos });
    },

    async update(req, res, knex) {
        let { id, email, name, senha } = req.body;

        let dto = {
            email,
            name,
            senha: senha && senha.length > 0 ? sha1(senha) : undefined
        }
        // if (senha && senha.length > 0) {
        //     dto.senha = sha1(senha);
        // }

        await knex('user').where('id', id).update(dto);

        res.json({ status: "success", data: {} });
    },

    async delete(req, res, knex) {
        let { id } = req.body;

        await knex('user').where('id', id).del();

        res.json({ status: "success", data: {} });
    }
}
