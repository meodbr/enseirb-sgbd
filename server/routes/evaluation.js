const evaluations = require("../controllers/controllerEvaluation");
module.exports = app => {

    var router = require("express").Router();
    router.use(require("express").json());

    // Crée une nouvelle évaluation
    router.post("/:idEmetteur", evaluations.create);

    // Renvoie toutes les évaluations
    router.get("/", evaluations.findAll);

    // Renvoie une évaluation avec un id emetteur donné
    router.get("/:idEmetteur", evaluations.findOne);

    // Met à jour une évaluation
    router.put("/:idEvaluation", evaluations.update);

    // Supprime une évaluation avec un id donné
    router.delete("/:idEvaluation", evaluations.delete);

    app.use('/api/evaluation', router);
};