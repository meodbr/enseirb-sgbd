const inscriptions = require("../controllers/controllerInscription");
module.exports = app => {

    var router = require("express").Router();
    router.use(require("express").json());

    // Crée un nouvel arrêt
    router.post("/", inscriptions.create);

    // Renvoie tout les arrêts
    router.get("/", inscriptions.findAll);

    // Renvoie un arrêt avec un id donné
    router.get("/:id", inscriptions.findOne);

    // Met à jour un arrêt
    router.put("/:idEtudiant/:idArret", inscriptions.update);

    // Supprime un arrêt avec un id donné
    router.delete("/:idEtudiant/:idArret", inscriptions.delete);

    app.use('/api/inscription', router);
};