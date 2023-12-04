const db = require("../db");

function queryCreate(etudiant){
    return (`INSERT INTO etudiant (nom, prenom) VALUES ('${etudiant.nom}', '${etudiant.prenom}')`);
}

function querySelectAll() {
    return("SELECT * from etudiant");
}

function querySelectId(id){
    return(`SELECT * from etudiant where id_etudiant=${id}`);
}

function queryUpdateById(id, etudiant){
    return(`UPDATE etudiant SET nom = '${etudiant.nom}', prenom = '${etudiant.prenom}' WHERE id_etudiant=${id}`);
}

function queryDeleteById(id){
    return(`DELETE from etudiant where id_etudiant=${id}`);
}

// étudiant par nom ou prénom
function queryFindByName() {
    return('SELECT * FROM etudiant WHERE LOWER(nom) LIKE \'%\' || LOWER($1) || \'%\' OR LOWER(prenom) LIKE \'%\' || LOWER($1) || \'%\'');
}

module.exports = {
    queryCreate,
    querySelectAll,
    querySelectId,
    queryUpdateById,
    queryDeleteById,
    queryFindByName
};
