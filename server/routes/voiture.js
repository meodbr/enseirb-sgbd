const voitures = require("../controllers/controllerVoiture");
module.exports = app => {

    var router = require("express").Router();
    router.use(require("express").json());

    // Create a new Car
    router.post("/", voitures.create);

    // Retrieve all Cars
    router.get("/", voitures.findAll);

    // Retrieve a single car with id
    router.get("/:id", voitures.findOne);

    // Update a car with id
    router.put("/:id", voitures.update);

    // Delete a car with id
    router.delete("/:id", voitures.delete);

    // liste des véhicules disponibles pour un jour donné pour une ville donnée
    router.get("/:day/:city", voitures.availableVehicules);

    app.use('/api/voiture', router);
};