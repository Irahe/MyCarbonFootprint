const loginRoutes = require("./routes/loginRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const efCategoryRoutes = require("./routes/efCategoryRoutes.js");
const efSubCategoryRoutes = require("./routes/efSubCategoryRoutes.js");
const ghgRoutes = require("./routes/ghgRoutes.js");
const emissionFactorsRoutes = require("./routes/emissionFactorsRoutes.js");
const answerRoutes = require("./routes/answerRoutes.js");

module.exports = (config_params) => {
    loginRoutes(config_params);
    userRoutes(config_params);
    efCategoryRoutes(config_params);
    efSubCategoryRoutes(config_params);
    ghgRoutes(config_params);
    emissionFactorsRoutes(config_params);
    answerRoutes(config_params);
}