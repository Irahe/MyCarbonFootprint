const hashMapFunctions = require("../helpers/hashMapFunctions");

module.exports = {
    async create(req, res, knex) {
        let { category_id, sub_category_id, ghg_id, displacement_factor } = req.body;

        let dto = {
            category_id, sub_category_id, ghg_id, displacement_factor
        }
        await knex('ghg_displacement_factor').insert(dto);

        res.json({ status: "success", data: {} });
    },

    async read(req, res, knex) {
        let dtos = await knex('ghg_displacement_factor').select();

        res.json({ status: "success", data: dtos });
    },

    async update(req, res, knex) {
        let { category_id, sub_category_id, ghg_id, displacement_factor } = req.body;

        let dto = {
            category_id,
            sub_category_id,
            ghg_id,
            displacement_factor
        }

        await knex('ghg_displacement_factor')
            .where('category_id', category_id)
            .andWhere('sub_category_id', sub_category_id)
            .andWhere('ghg_id', ghg_id)
            .update(dto);

        res.json({ status: "success", data: {} });
    },

    async readEmissionFactors(req, res, knex) {
        let subcats = await this.getAggregatedEmissionFactors(knex);

        res.json({ status: "success", data: subcats });
    },

    //unrouted functions for multi-use
    async getAggregatedEmissionFactors(knex) {
        let displacement_factors = await knex('ghg_displacement_factor').select();
        let [ghgs, sub_categories] = await Promise.all([
            knex('greenhouse_gas').whereIn('id', displacement_factors.map(element => element.ghg_id)).select(),
            knex('sub_category').whereIn('id', displacement_factors.map(element => element.sub_category_id)).select()
        ])

        //hash ghg for performance
        ghgs = hashMapFunctions.hashObjectBy(ghgs, 'id');

        displacement_factors = hashMapFunctions.hashObjectBy(displacement_factors, 'sub_category_id');

        for (let sub_category of sub_categories) {
            if (sub_category.id in displacement_factors) {
                if (!Array.isArray(displacement_factors[sub_category.id])) {
                    displacement_factors[sub_category.id] = [displacement_factors[sub_category.id]]
                }
                sub_category.displacement_factors = [];
                sub_category.co2e = 0;
                for (let factor of displacement_factors[sub_category.id]) {
                    if (factor.ghg_id in ghgs) {
                        //add ghg info
                        factor.ghg = ghgs[factor.ghg_id];
                        sub_category.displacement_factors.push(factor);
                        //aggregate carbon factor
                        sub_category.co2e += factor.displacement_factor * factor.ghg.gwp_factor;
                    }
                }
            } else {
                sub_category.displacement_factors = [];
                sub_category.co2eq = 0;
            }
        }

        return sub_categories;
    }

}
