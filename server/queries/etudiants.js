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

function queryGetRate(id){
    return(`SELECT e.nom, e.prenom, AVG(ev.note) \
    AS avg FROM etudiant e \
    JOIN evaluation ev ON e.id_etudiant = ev.id_receveur \
    JOIN voyage vo ON vo.id_voyage = ev.id_voyage \
    JOIN voiture v ON vo.id_voiture = v.id_voiture \
    WHERE ev.id_receveur = v.id_proprietaire AND ev.id_receveur = ${id} \
    GROUP BY e.id_etudiant`)
}

module.exports = {
    queryCreate,
    querySelectAll,
    querySelectId,
    queryUpdateById,
    queryDeleteById,
    queryFindByName,
    queryGetRate
};
