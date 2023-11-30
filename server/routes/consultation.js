const consultation = require("../controllers/controllerConsultation");
module.exports = app => {

    var router = require("express").Router();
    router.use(require("express").json());

    // étudiant par nom ou prénom
    router.get("/recherche/:pattern", consultation.findByName);

    // liste des véhicules disponibles pour un jour donné pour une ville donnée
    router.get("/vehicules-disponibles/:city", consultation.availableVehicules);

    // les trajets proposés dans un intervalle de jours donné, 
    router.get("/voyages/:beginDate/:endDate", consultation.VoyageBetweenDates);

    // trajets pouvant desservir une ville donnée dans un intervalle de temps
    router.get("/voyages-vers-ville/:city/:beginDate/:endDate", consultation.VoyageToCityBetweenDates);

    app.use('/api/consultation', router);
};