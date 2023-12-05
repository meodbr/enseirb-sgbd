const db = require('../db');
const {queryCreate, querySelectAll, querySelectId, queryUpdateById, queryDeleteById
} = require("../queries/arrets");

// Crée un arrêt
exports.create = (req, res) => {

    const arret = {
        ville: req.body.ville,
        heurePassage: req.body.heure_passage,
        prixParPassager: req.body.prix_par_passager,
    };

    db.query(queryCreate(arret), (err, rows, fields) => {
        if (!err)
            res.send({message:"arrêt créé"});
        else
            res.status(500).send({
                message:
                    err.message || `ERREUR CRÉATION de ${etudiant}.`
            });
    })
};

// Renvoie tout les arrêts
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

// Cherche un arrêt par l'id
exports.findOne = (req, res) => {
    const id = req.params.id;
    db.query(querySelectId(id), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                res.send(result);
            else
                res.status(404).send({
                    message:
                        `Arrêt avec l'id: ${id} non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucun arrêt trouvé avec l'id: ${id}.`
            });
    })
};

// Modifie l'arrêt par l'id
exports.update = (req, res) => {
    const id = req.params.id;
    const arret = {
        ville: req.body.ville,
        heurePassage: req.body.heure_passage,
        prixParPassager: req.body.prix_par_passager,
    };


    db.query(querySelectId(id), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                db.query(queryUpdateById(id, arret), (err, rows, fields) => {
                    if (!err)
                        res.send('Modifications faites');
                    else
                        console.log(err);
                })
            else
                res.status(404).send({
                    message:
                        `Arrêt avec l'id: ${id} non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucun arrêt trouvé avec l'id: ${id}.`
            });
    })

};

// Supprime l'arrêt avec l'id sélectionné
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
                        `Arrêt avec l'id: ${id} non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucun arrêt trouvé avec l'id: ${id}.`
            });
    })

};
