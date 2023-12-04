function queryCreate(voyage){
    return (`INSERT INTO voyage (id_voiture, date_depart, heure_depart) VALUES ('${voyage.idVoiture}', '${voyage.date}', '${voyage.heure}')`);
}

function querySelectAll() {
    return("SELECT * from voyage");
}

function querySelectId(id){
    return(`SELECT * from voyage where id_voyage=${id}`);
}

function queryUpdateById(id, voyage){
    return(`UPDATE voyage SET id_voiture='${voyage.idVoiture}', date_depart='${voyage.date}', heure_depart='${voyage.heure}' WHERE id_voyage=${id}`);
}

function queryDeleteById(id){
    return(`DELETE from voyage where id_voyage=${id}`);
}

// les trajets proposés dans un intervalle de jours donné, 
function queryVoyageBetweenDates() {
    return('SELECT * FROM Voyage WHERE date_depart >= $1 AND date_depart <= $2');
}

// trajets pouvant desservir une ville donnée dans un intervalle de temps
function queryVoyageToCityBetweenDates() {
    return('SELECT Voyage.* FROM Voyage NATURAL JOIN Arret WHERE ville = $1 AND date_depart >= $2 AND date_depart <= $3');
}

module.exports = {
    queryCreate,
    querySelectAll,
    querySelectId,
    queryUpdateById,
    queryDeleteById,
    queryVoyageBetweenDates,
    queryVoyageToCityBetweenDates
};
