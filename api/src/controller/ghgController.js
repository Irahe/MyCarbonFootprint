module.exports = {
    async create(req, res, knex) {
        let { name, gwp_factor } = req.body;

        let dto = {
            name,
            gwp_factor
        }
        await knex('greenhouse_gas').insert(dto);

        res.json({ status: "success", data: {} });
    },

    async read(req, res, knex) {

        let dtos = await knex('greenhouse_gas').select();

        res.json({ status: "success", data: dtos });
    },

    async update(req, res, knex) {
        let { id, name, gwp_factor } = req.body;

        let dto = {
            name,
            gwp_factor
        }

        await knex('greenhouse_gas').where('id', id).update(dto);

        res.json({ status: "success", data: {} });
    },

}
