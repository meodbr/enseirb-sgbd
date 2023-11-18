const db = require('../db');
const {queryCreate, querySelectAll, querySelectId, queryUpdateById, queryDeleteById
} = require("../queries/voyages");

// Crée un voyage
exports.create = (req, res) => {

    const voyage = {
        idVoiture: req.body.id_voiture,
        date: req.body.date_depart,
        heure: req.body.heure_depart,
    };


    db.query(queryCreate(voyage), (err, rows, fields) => {
        if (!err)
            res.status(303).send({message : "voyage créé"});
        else
            res.status(500).send({
                message:
                    err.message || `ERREUR CRÉATION de ${trip}.`
            });
    })
};

// Renvoie tout les voyages
exports.findAll = (req, res) => {
    db.query(querySelectAll(), (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            res.status(500).send({
                message:
                    err.message || `ERREUR: ${requeteSelectAll}.`
            });
    })
};

// Cherche un voyage par l'id
exports.findOne = (req, res) => {
    const id = req.params.id;
    db.query(querySelectId(id), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                res.send(result);
            else
                res.status(404).send({
                    message:
                        `Voyage avec l'id: ${id} non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucun voyage trouvé avec l'id: ${id}.`
            });
    })
};

// Modifie le voyage par l'id
exports.update = (req, res) => {
    const id = req.params.id;
    const voyage = {
        idVoiture: req.body.id_voiture,
        date: req.body.date_depart,
        heure: req.body.heure_depart,
    };

    db.query(querySelectId(id), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                db.query(queryUpdateById(id, voyage), (err, result, fields) => {
                    if (!err)
                        res.send('Modifications faites');
                    else
                        console.log(err);
                })
            else
                res.status(404).send({
                    message:
                        `Voyage avec l'id: ${id} non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucun voyage trouvé avec l'id: ${id}.`
            });
    })

};

// Supprime le voyage avec l'id sélectionné
exports.delete = (req, res) => {
    const id = req.params.id;
    db.query(querySelectId(id), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                db.query(queryDeleteById(id), (err, rows, fields) => {
                    if (!err)
                        res.send({
                            message: "Trajet supprimé"
                        });
                    else
                        console.log(err);
                })
            else
                res.status(404).send({
                    message:
                        `Voyage avec l'id: ${id} non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucun voyage trouvé avec l'id: ${id}.`
            });
    })

};
