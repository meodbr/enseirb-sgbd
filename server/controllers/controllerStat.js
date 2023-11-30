const db = require('../db');
const {queryStatConducteur, queryStatDistance, queryStatPassagers, queryStatVille
} = require("../queries/stats");

// renvoie les statistiques sur les meilleurs conducteurs
exports.statConducteur = (req, res) => {
    db.query(queryStatConducteur(), (err, result, fields) => {
        if (!err)
            res.send(result.rows);
        else
            res.status(500).send({
                message:
                    err.message || `statistiques pour conducteur non trouvées`
            });
    })
};

// renvoie les statistiques sur les villes les plus desservies
exports.statVille = (req, res) => {
    db.query(queryStatVille(), (err, result, fields) => {
        if (!err)
            res.send(result.rows);
        else
            res.status(500).send({
                message:
                    err.message || `statistiques pour villes desservies non trouvées`
            });
    })
};

// renvoie les statistiques sur le nombre de passager en moyenne dans les voitures
exports.statPassagers = (req, res) => {
    db.query(queryStatPassagers(), (err, result, fields) => {
        if (!err)
            res.send(result.rows);
        else
            res.status(500).send({
                message:
                    err.message || `statistiques sur le nombre de passager moyen non trouvé`
            });
    })
};

// renvoie les statistiques sur la moyenne des distances
exports.statDistance = (req, res) => {
    db.query(queryStatDistance(), (err, result, fields) => {
        if (!err)
            res.send(result.rows);
        else
            res.status(500).send({
                message:
                    err.message || `statistiques pour les distances moyennes non trouvé`
            });
    })
};