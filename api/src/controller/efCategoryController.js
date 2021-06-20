const hashMapFunctions = require("../helpers/hashMapFunctions");


module.exports = {
    async create(req, res, knex) {
        let { name } = req.body;

        let dto = {
            name
        }
        await knex('category').insert(dto);

        res.json({ status: "success", data: {} });
    },

    async read(req, res, knex) {
        let subCategories = hashMapFunctions.hashObjectBy(await knex('sub_category').select(), 'category_id');

        let dtos = await knex('category').select();

        for (let item of dtos) {
            if (item.id in subCategories) {
                item.subCategories = Array.isArray(subCategories[item.id]) ? subCategories[item.id] : [subCategories[item.id]];
            } else {
                item.subCategories = [];
            }
        }

        res.json({ status: "success", data: dtos.filter(cat => cat.subCategories.length > 0) });
    },

    async update(req, res, knex) {
        let { id, name } = req.body;

        let dto = {
            name,
        }

        await knex('category').where('id', id).update(dto);

        res.json({ status: "success", data: {} });
    },

}
