const db = require('../db');
const {queryCreate, querySelectAll, querySelectId, queryUpdateById, queryDeleteById, queryFindByName
} = require("../queries/etudiants");

// Crée un étudiant
exports.create = (req, res) => {

    const etudiant = {
        nom: req.body.nom,
        prenom: req.body.prenom,
    };


    db.query(queryCreate(etudiant), (err, result, fields) => {
        if (!err)
            res.send({message:"étudiant créé"});
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
            res.send(result.rows);
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
