const db = require('../db');
const {queryCreate, querySelectAll, querySelectId, queryUpdateById, queryDeleteById
} = require("../queries/inscription");

// Crée une inscription
exports.create = (req, res) => {

    const inscription = {
        idEtudiant: req.body.id_etudiant,
        idArret: req.body.id_arret,
        estValide: req.body.est_valide,
    };

    db.query(queryCreate(inscription), (err, rows, fields) => {
        if (!err)
            res.send({message:"inscription créé"});
        else
            res.status(500).send({
                message:
                    err.message || `ERREUR CRÉATION de ${etudiant}.`
            });
    })
};

// Renvoie tout les inscriptions
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

// Cherche un inscription par l'id
exports.findOne = (req, res) => {
    const id = req.params.id;
    db.query(querySelectId(id), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                res.send(result);
            else
                res.status(200).send({
                    message:
                        `Inscription avec l'id: ${id} de l'étudiant non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucune inscription trouvée avec l'id: ${id}.`
            });
    })
};

// Modifie l'inscription par l'id
exports.update = (req, res) => {
    const idEtudiant = req.params.idEtudiant;
    const idArret = req.params.idArret;
    const inscription = {
        idEtudiant: req.body.id_etudiant,
        idArret: req.body.id_arret,
        estValide: req.body.est_valide,
    };

    db.query(querySelectId(idEtudiant), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                db.query(queryUpdateById(idEtudiant, idArret, inscription), (err, result, fields) => {
                    if (!err)
                        res.send('Modifications faites');
                    else
                        console.log(err);
                })
            else
                res.status(500).send({
                    message:
                        `Inscription avec l'id: ${idEtudiant} de l'étudiant non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucune inscription trouvée avec l'id: ${idEtudiant}.`
            });
    })

};

// Supprime l'inscription avec l'id sélectionné
exports.delete = (req, res) => {
    const idEtudiant = req.params.idEtudiant;
    const idArret = req.params.idArret
    db.query(querySelectId(idEtudiant), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                db.query(queryDeleteById(idEtudiant, idArret), (err, result, fields) => {
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
                        `Inscription avec l'id: ${idEtudiant} de l'étudiant non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucune inscription trouvée avec l'id: ${idEtudiant}.`
            });
    })

};
