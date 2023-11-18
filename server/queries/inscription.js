const db = require("../db");

function queryCreate(inscription){
    return (`INSERT INTO inscription (id_etudiant, id_arret, est_valide) VALUES ('${inscription.idEtudiant}', '${inscription.idArret}', '${inscription.estValide}')`);
}

function querySelectAll() {
    return("SELECT * from inscription");
}

function querySelectId(id){
    return(`SELECT * from inscription where id_etudiant=${id}`);
}

function queryUpdateById(idEtudiant, idArret, inscription){
    return(`UPDATE inscription SET id_etudiant = '${inscription.idEtudiant}', id_arret = '${inscription.idArret}', est_valide = '${inscription.estValide}' WHERE id_etudiant=${idEtudiant} AND id_arret=${idArret}`);
}

function queryDeleteById(idEtudiant, idArret){
    return(`DELETE from inscription WHERE id_etudiant=${idEtudiant} AND id_arret=${idArret}`);
}

module.exports = {
    queryCreate,
    querySelectAll,
    querySelectId,
    queryUpdateById,
    queryDeleteById
};
