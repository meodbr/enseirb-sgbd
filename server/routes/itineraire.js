const itineraires = require("../controllers/controllerItineraire");
module.exports = app => {

    var router = require("express").Router();
    router.use(require("express").json());

    // Crée un nouvel arrêt
    router.post("/", itineraires.create);

    // Renvoie tout les arrêts
    router.get("/", itineraires.findAll);

    // Renvoie un arrêt avec un id donné
    router.get("/:idVoyage", itineraires.findOne);

    // Met à jour un arrêt
    router.put("/:idVoyage/:idArret", itineraires.update);

    // Supprime un arrêt avec un id donné
    router.delete("/:idVoyage/:idArret", itineraires.delete);

    app.use('/api/itineraire', router);
};