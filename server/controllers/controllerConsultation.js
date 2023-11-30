const db = require('../db');
const { queryFindByName, queryAvailableVehicles, queryVoyageBetweenDates, queryVoyageToCityBetweenDates } = require('../queries/consultation');

// étudiant par nom ou prénom
exports.findByName = (req, res) => {
    const pattern = req.params.pattern;
    db.query(queryFindByName(), [pattern], (err, result, fields) => {
        if (!err)
            res.send(result.rows);
        else
            res.status(500).send({
                message:
                    err.message || `ERREUR: ${requeteFindByName}.`
            });
    })
};

// liste des véhicules disponibles pour un jour donné pour une ville donnée
exports.availableVehicules = (req, res) => {
    const city = req.params.city;
    db.query(queryAvailableVehicles(), [city], (err, result, fields) => {
        if (!err)
            res.send(result.rows);
        else
            res.status(500).send({
                message:
                    err.message || `ERREUR: ${requeteAvailableVehicules}.`
            });
    })
};

// les trajets proposés dans un intervalle de jours donné, 
exports.VoyageBetweenDates = (req, res) => {
    const beginDate = req.params.beginDate, endDate = req.params.endDate;
    db.query(queryVoyageBetweenDates(), [beginDate, endDate], (err, result, fields) => {
        if (!err)
            res.send(result.rows);
        else
            res.status(500).send({
                message:
                    err.message || `ERREUR: ${requeteVoyageBetweenDates}.`
            });
    })
};

// trajets pouvant desservir une ville donnée dans un intervalle de temps
exports.VoyageToCityBetweenDates = (req, res) => {
    const city = req.params.city;
    const beginDate = req.params.beginDate, endDate = req.params.endDate;
    db.query(queryVoyageToCityBetweenDates(), [city, beginDate, endDate], (err, result, fields) => {
        if (!err)
            res.send(result.rows);
        else
            res.status(500).send({
                message:
                    err.message || `ERREUR: ${requeteVoyageToCityBetweenDates}.`
            });
    })
};

