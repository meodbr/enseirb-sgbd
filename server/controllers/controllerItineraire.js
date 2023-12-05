const db = require('../db');
const {queryCreate, querySelectAll, querySelectId, queryUpdateById, queryDeleteById
} = require("../queries/itineraires");

// Crée un itineraire
exports.create = (req, res) => {

    const itineraire = {
        idVoyage: req.body.id_voyage,
        idArret: req.body.id_arret,
    };

    db.query(queryCreate(itineraire), (err, rows, fields) => {
        if (!err)
            res.send({message:"itinéraire créé"});
        else
            res.status(500).send({
                message:
                    err.message || `ERREUR CRÉATION de ${etudiant}.`
            });
    })
};

// Renvoie tout les itineraires
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

// Cherche un itineraire par l'id
exports.findOne = (req, res) => {
    const idVoyage= req.params.idVoyage;
    db.query(querySelectId(idVoyage), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                res.send(result);
            else
                res.status(404).send({
                    message:
                        `itineraire avec l'id: ${id} du voyage non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucun itinéraire trouvé avec l'id: ${idTrajet}/${idVoyage}.`
            });
    })
};

// Modifie l'itineraire par l'id
exports.update = (req, res) => {
    const idArret = req.params.idArret;
    const idVoyage= req.params.idVoyage;
    const NewIdArret = req.body.id_arret;

    db.query(querySelectId(idVoyage), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                db.query(queryUpdateById(idVoyage, idArret, NewIdArret), (err, result, fields) => {
                    if (!err)
                        res.send('Modifications faites');
                    else
                        console.log(err);
                })
            else
                res.status(404).send({
                    message:
                        `itineraire avec l'id: ${idVoyage} du voyage non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucun itineraire trouvé avec l'id: ${idArret}/${idVoyage}.`
            });
    })

};

// Supprime l'itineraire avec l'id sélectionné
exports.delete = (req, res) => {
    const idArret = req.params.idArret;
    const idVoyage= req.params.idVoyage;
    db.query(querySelectId(idVoyage), (err, result, fields) => {
        if (!err)
            if(result.rows.length>0)
                db.query(queryDeleteById(idVoyage, idArret), (err, rows, fields) => {
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
                        `itineraire avec l'id: ${id} du voyage non trouvable`
                });
        else
            res.status(500).send({
                message:
                    err.message || `Aucun itineraire trouvé avec l'id: ${idArret}/${idVoyage}.`
            });
    })

};
