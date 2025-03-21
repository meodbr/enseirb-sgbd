const etudiants = require("../controllers/controllerEtudiant");
module.exports = app => {

    var router = require("express").Router();
    router.use(require("express").json());

    // Crée un nouvel étudiant
    router.post("/", etudiants.create);

    // Renvoie tout les étudiants
    router.get("/", etudiants.findAll);

    // Renvoie un étudiant avec un id donné
    router.get("/:id", etudiants.findOne);

    // Met à jour un étudiant
    router.put("/:id", etudiants.update);

    // Supprime un étudiant avec un id donné
    router.delete("/:id", etudiants.delete);

    // étudiant par nom ou prénom
    router.get("/name/:pattern", etudiants.findByName);

    router.get("/name/:pattern", etudiants.findByName);

    router.get("/rate/:id", etudiants.FindRateById);

    app.use('/api/etudiant', router);
};