const arrets = require("../controllers/controllerArret");
module.exports = app => {

    var router = require("express").Router();
    router.use(require("express").json());

    // Crée un nouvel arrêt
    router.post("/", arrets.create);

    // Renvoie tout les arrêts
    router.get("/", arrets.findAll);

    // Renvoie un arrêt avec un id donné
    router.get("/:id", arrets.findOne);

    // Met à jour un arrêt
    router.put("/:id", arrets.update);

    // Supprime un arrêt avec un id donné
    router.delete("/:id", arrets.delete);

    app.use('/api/arret', router);
};