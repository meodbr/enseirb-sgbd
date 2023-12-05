const db = require('../db');
const {queryCreate, querySelectAll, querySelectId, queryUpdateById, queryDeleteById, queryAvailableVehicles
} = require("../queries/voitures");

// Crée une voiture
exports.create = (req, res) => {

    const voiture = {
        idProprietaire: req.body.id_proprietaire,
        type: req.body.type_voiture,
        couleur: req.body.couleur,
        nbPlacesPassager: req.body.nb_places_passager,
        etat: req.body.etat,
    };


    db.query(queryCreate(voiture), (err, rows, fields) => {
        if (!err)
            res.send({message : "voiture créé"});
        else
            res.status(500).send({
                message:
                    err.message || `ERREUR CRÉATION de ${voiture}.`
            });
    })
};

// Renvoie toutes les voitures
exports.findAll = (req, res) => {
    db.query(querySelectAll(), (err, result, fields) => {
        if (!err)
            res.send(result.rows);
        else
            res.status(500).send({
                message:
                    err.message || `ERREUR: ${requeteSelectAll}.`
            });
    })
};

// Cherche un voiture par l'id
exports.findOne = (req, res) => {
    const id = req.params.id;
    db.query(querySelectId(id), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                res.send(result);
            else
                res.status(404).send({
                    message:
                        `Voiture avec l'id: ${id} non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucune voiture trouvé avec l'id: ${id}.`
            });
    })
};

// Modifie la voiture par l'id
exports.update = (req, res) => {
    const id = req.params.id;
    const voiture = {
        idProprietaire: req.body.id_proprietaire,
        type: req.body.type_voiture,
        couleur: req.body.couleur,
        nbPlacesPassager: req.body.nb_places_passager,
        etat: req.body.etat,
    };

    db.query(querySelectId(id), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                db.query(queryUpdateById(id, voiture), (err, result, fields) => {
                    if (!err)
                        res.send('Modifications faites');
                    else
                        console.log(err);
                })
            else
                res.status(404).send({
                    message:
                        `Voiture avec l'id: ${id} non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucune voiture trouvé avec l'id: ${id}.`
            });
    })

};

// Supprime la voiture avec l'id sélectionné
exports.delete = (req, res) => {
    const id = req.params.id;
    db.query(querySelectId(id), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                db.query(queryDeleteById(id), (err, result, fields) => {
                    if (!err)
                        res.send({
                            message: "Voiture supprimé"
                        });
                    else
                        console.log(err);
                })
            else
                res.status(404).send({
                    message:
                        `Voiture avec l'id: ${id} non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucune voiture trouvé avec l'id: ${id}.`
            });
    })

};

// liste des véhicules disponibles pour un jour donné pour une ville donnée
exports.availableVehicules = (req, res) => {
    const city = req.params.city;
    const day = req.params.day;
    db.query(queryAvailableVehicles(), [day,city], (err, result, fields) => {
        if (!err)
            res.send(result.rows);
        else
            res.status(500).send({
                message:
                    err.message || `ERREUR: ${requeteAvailableVehicules}.`
            });
    })
};
