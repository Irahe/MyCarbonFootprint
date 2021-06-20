module.exports = {
    async create(req, res, knex) {
        let { name, category_id } = req.body;

        let dto = {
            name,
            category_id
        }
        await knex('sub_category').insert(dto);

        res.json({ status: "success", data: {} });
    },

    async read(req, res, knex) {

        let dtos = await knex('sub_category').select();

        res.json({ status: "success", data: dtos });
    },

    async update(req, res, knex) {
        let { id, name, category_id } = req.body;

        let dto = {
            name,
            category_id
        }

        await knex('sub_category').where('id', id).update(dto);

        res.json({ status: "success", data: {} });
    },

}
