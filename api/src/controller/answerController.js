const { getAggregatedEmissionFactors } = require('../controller/emissionFactorsController');
const { hashObjectBy } = require('../helpers/hashMapFunctions');

module.exports = {
    async process(req, res, knex) {
        let {
            people,
            electricity,
            naturalGas,
            lpg,
            oil,
            water,
            waste,
            comuteByCar,
            comuteByBus,
            carType,
            dairy,
            drinks,
            fruits,
            redMeat,
            whiteMeat,
            vegetables,
            cereals,
            can_save
        } = req.body;

        let report = {};

        let subcatFactors = hashObjectBy(await getAggregatedEmissionFactors(knex), 'id');

        report.electricityFootprint = (subcatFactors[13].co2e * Number(electricity) * 12) / people; //electricity monthly
        report.fuelFootprint = ((subcatFactors[1].co2e * Number(naturalGas) * 12) + (subcatFactors[7].co2e * Number(lpg) * 12) + (subcatFactors[10].co2e * Number(oil) * 12)) / people; //fuels monthly
        report.waterFootprint = (subcatFactors[25].co2e * Number(water) * 12) / people; //water monthly
        report.wasteFootprint = (subcatFactors[15].co2e * Number(waste) * 52) / people; //waste weakly
        report.comuteFootprint = 0;

        if (comuteByCar && Number(comuteByCar) > 0 && carType) {
            report.comuteFootprint += (subcatFactors[Number(carType)].co2e * comuteByCar * 52)//miles by car weakly
        }
        if (comuteByBus && Number(comuteByBus) > 0) {
            report.comuteFootprint += (subcatFactors[6].co2e * comuteByBus * 52)//miles by bus weakly
        }

        report.foodFootprint = 0;

        report.foodFootprint += subcatFactors[18].co2e * (redMeat * 0.1) * 52; //red Meat weakly using USDA 100g standard quantity
        report.foodFootprint += subcatFactors[19].co2e * (whiteMeat * 0.1) * 52; //white Meat weakly using USDA 100g standard quantity
        report.foodFootprint += subcatFactors[20].co2e * (dairy * 0.1) * 52; //Dairy weakly using USDA 100g standard quantity
        report.foodFootprint += subcatFactors[21].co2e * (vegetables * 0.1) * 52; //Vegetables weakly using USDA 100g standard quantity
        report.foodFootprint += subcatFactors[22].co2e * (fruits * 0.06) * 52; //Fruits weakly using USDA 60g standard quantity
        report.foodFootprint += subcatFactors[24].co2e * (drinks * 0.1) * 52; //Drinks weakly using USDA 100ml standard quantity
        report.foodFootprint += subcatFactors[23].co2e * (cereals * 0.06) * 52; //Cereal & Grains weakly using USDA 60g standard quantity

        report.total = Object.values(report).reduce((acc, cVal) => acc + cVal)

        if (can_save) {
            await knex('answer').insert({
                people,
                electricity,
                naturalGas,
                lpg,
                oil,
                water,
                waste,
                comuteByCar,
                comuteByBus,
                carType,
                dairy,
                drinks,
                fruits,
                redMeat,
                whiteMeat,
                vegetables,
                cereals,
            });
        }

        await knex('report').insert(report);


        res.json({ status: "success", data: report });
    },

}
