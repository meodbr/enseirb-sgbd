const consultation = require("../controllers/controllerConsultation");
module.exports = app => {

    var router = require("express").Router();
    router.use(require("express").json());

    // Crée un nouvel étudiant
    // router.post("/", etudiants.create);

    // Renvoie tout les étudiants
    // router.get("/", etudiants.findAll);

    // Renvoie un étudiant avec un id donné
    // router.get("/:id", etudiants.findOne);

    // Met à jour un étudiant
    // router.put("/:id", etudiants.update);

    // Supprime un étudiant avec un id donné
    // router.delete("/:id", etudiants.delete);

    // NEW

    // liste des véhicules disponibles pour un jour donné pour une ville donnée
    router.get("/av/:city", consultation.availableVehicules);

    // les trajets proposés dans un intervalle de jours donné, 
    router.get("/voy/:beginDate/:endDate", consultation.VoyageBetweenDates);

    // trajets pouvant desservir une ville donnée dans un intervalle de temps
    router.get("/voyc/:city/:beginDate/:endDate", consultation.VoyageToCityBetweenDates);

    app.use('/api/consultation', router);
};