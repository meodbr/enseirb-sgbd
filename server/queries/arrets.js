const db = require("../db");

function queryCreate(arret){
    return (`INSERT INTO arret (ville, heure_passage, prix_par_passager) VALUES ('${arret.ville}', '${arret.heurePassage}', '${arret.prixParPassager}')`);
}

function querySelectAll() {
    return("SELECT * from arret");
}

function querySelectId(id){
    return(`SELECT * from arret where id_arret=${id}`);
}

function queryUpdateById(id, arret){
    return(`UPDATE arret SET ville = '${arret.ville}', heure_passage = '${arret.heurePassage}', prix_par_passager='${arret.prixParPassager}' WHERE id_arret=${id}`);
}

function queryDeleteById(id){
    return(`DELETE from arret where id_arret=${id}`);
}

module.exports = {
    queryCreate,
    querySelectAll,
    querySelectId,
    queryUpdateById,
    queryDeleteById
};
