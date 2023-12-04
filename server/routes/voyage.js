const voyages = require("../controllers/controllerVoyage");
module.exports = app => {

    var router = require("express").Router();
    router.use(require("express").json());

    // crée un nouveau voyage
    router.post("/", voyages.create);

    // Renvoie tout les voyages
    router.get("/", voyages.findAll);

    // Renvoie un voyage avec un id donné
    router.get("/:id", voyages.findOne);

    // Met à jour voyage avec un id donné
    router.put("/:id", voyages.update);

    // Supprime un voyage avec un id donné
    router.delete("/:id", voyages.delete);

    // les trajets proposés dans un intervalle de jours donné, 
    router.get("/:beginDate/:endDate", voyages.VoyageBetweenDates);

    // trajets pouvant desservir une ville donnée dans un intervalle de temps
    router.get("/:city/:beginDate/:endDate", voyages.VoyageToCityBetweenDates);

    app.use('/api/voyage', router);
};