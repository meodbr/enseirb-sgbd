const consultation = require("../controllers/controllerConsultation");
module.exports = app => {

    var router = require("express").Router();
    router.use(require("express").json());

    // liste des véhicules disponibles pour un jour donné pour une ville donnée
    router.get("/av/:city", consultation.availableVehicules);

    // les trajets proposés dans un intervalle de jours donné, 
    router.get("/voy/:beginDate/:endDate", consultation.VoyageBetweenDates);

    // trajets pouvant desservir une ville donnée dans un intervalle de temps
    router.get("/voyc/:city/:beginDate/:endDate", consultation.VoyageToCityBetweenDates);

    app.use('/api/consultation', router);
};