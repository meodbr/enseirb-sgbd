const stats = require("../controllers/controllerStat");
module.exports = app => {

    var router = require("express").Router();
    router.use(require("express").json());

    // Renvoie tout les arrêts
    router.get("/conducteurs", stats.statConducteur);

    // Renvoie tout les arrêts
    router.get("/moyenne/passagers", stats.statPassagers);

    // Renvoie tout les arrêts
    router.get("/moyenne/distance", stats.statDistance);

    // Renvoie tout les arrêts
    router.get("/villes", stats.statVille);

    app.use('/api/stat', router);
};