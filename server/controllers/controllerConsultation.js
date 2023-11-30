const db = require('../db');
const { queryAvailableVehicles, queryVoyageBetweenDates, queryVoyageToCityBetweenDates } = require('../queries/consultation');
const {queryCreate, querySelectAll, querySelectId, queryUpdateById, queryDeleteById
} = require("../queries/etudiants");

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
                    err.message || `ERREUR: ${requeteAvailableVehicules}.`
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
                    err.message || `ERREUR: ${requeteAvailableVehicules}.`
            });
    })
};

// Crée un étudiant
exports.create = (req, res) => {

    const etudiant = {
        nom: req.body.nom,
        prenom: req.body.prenom,
    };


    db.query(queryCreate(etudiant), (err, result, fields) => {
        if (!err)
            res.status(303).send({message : "étudiant créé"});
        else
            res.status(500).send({
                message:
                    err.message || `ERREUR CRÉATION de ${etudiant}.`
            });
    })
};

// Renvoie tout les étudiants
exports.findAll = (req, res) => {
    db.query(querySelectAll(), (err, result, fields) => {
        if (!err)
            res.send(result);
        else
            res.status(500).send({
                message:
                    err.message || `ERREUR: ${requeteSelectAll}.`
            });
    })
};

// Cherche un étudiant par l'id
exports.findOne = (req, res) => {
    const id = req.params.id;
    db.query(querySelectId(id), (err, result, fields) => {
        if (!err) {
            if (result.rows.length > 0)
                res.send(result);
            else
                res.status(404).send({
                    message:
                        `étudiant avec l'id: ${id} non trouvable`
                });
        }
        else
            res.status(500).send({
                message:
                    err.message || `Aucun étudiant trouvé avec l'id: ${id}.`
            });
    })
};

// Modifie l'étudiant par l'id
exports.update = (req, res) => {
    const id = req.params.id;
    const etudiant = {
        nom: req.body.nom,
        prenom: req.body.prenom,
    };


    db.query(querySelectId(id), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                db.query(queryUpdateById(id, etudiant), (err, result, fields) => {
                    if (!err)
                        res.send('Modifications faites');
                    else
                        console.log(err);
                })
            else
                res.status(404).send({
                    message:
                        `étudiant avec l'id: ${id} non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucun étudiant trouvé avec l'id: ${id}.`
            });
    })

};

// Supprime l'étudiant avec l'id sélectionné
exports.delete = (req, res) => {
    const id = req.params.id;
    db.query(querySelectId(id), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                db.query(queryDeleteById(id), (err, result, fields) => {
                    if (!err)
                        res.send({
                            message: "Supprimé"
                        });
                    else
                        console.log(err);
                })
            else
                res.status(404).send({
                    message:
                        `étudiant avec l'id: ${id} non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucun étudiant trouvé avec l'id: ${id}.`
            });
    })

};
