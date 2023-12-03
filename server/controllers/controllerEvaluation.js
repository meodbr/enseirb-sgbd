const db = require('../db');
const {queryCreate, querySelectAll, querySelectId, queryUpdateById, queryDeleteById
} = require("../queries/evaluations");

// Crée une évaluation
exports.create = (req, res) => {

    const evaluation = {
        idEmetteur: req.params.idEmetteur,
        idReceveur: req.body.id_receveur,
        idVoyage: req.body.id_voyage,
        note: req.body.note,
        commentaire: req.body.commentaire,
    };

    db.query(queryCreate(evaluation), (err, rows, fields) => {
        if (!err)
            res.status(303).send({message : "évaluation créé"});
        else
            res.status(500).send({
                message:
                    err.message || `ERREUR CRÉATION de ${etudiant}.`
            });
    })
};

// Renvoie toutes les évaluations
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

// Cherche une évaluation par l'id
exports.findOne = (req, res) => {
    const id = req.params.idEmetteur;
    db.query(querySelectId(id), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                res.send(result);
            else
                res.status(404).send({
                    message:
                        `evaluation avec l'id: ${id} de l'emetteur non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucune évaluation trouvée avec l'id: ${id}.`
            });
    })
};

// Modifie l'évaluation par l'id
exports.update = (req, res) => {
    /*
    const evaluation = {
        idEvaluation: req.params.idEvaluation,
        idEmetteur: req.params.idEmetteur,
        idReceveur: req.params.idReceveur,
        idVoyage: req.params.idVoyage,
        note: req.body.note,
        commentaire: req.body.commentaire,
    };
    */

    const idEvaluation = req.params.idEvaluation;


    db.query(querySelectId(evaluation.idEmetteur), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                db.query(queryUpdateById(evaluation), (err, result, fields) => {
                    if (!err)
                        res.send('Modifications faites');
                    else
                        console.log(err);
                })
            else
                res.status(404).send({
                    message:
                        `evaluation avec l'id: ${id} de l'emetteur non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucune évaluation trouvée avec l'id: ${id}.`
            });
    })

};

// Supprime l'évaluation avec l'id sélectionné
exports.delete = (req, res) => {
    const idEvaluation= req.params.idEvaluation;
    db.query(querySelectId(idEmetteur), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                db.query(queryDeleteById(idEvaluation), (err, result, fields) => {
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
                        `evaluation avec l'id: ${id} non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucune évaluation trouvée avec l'id: ${id}.`
            });
    })

};
