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

module.exports = {
    queryCreate,
    querySelectAll,
    querySelectId,
    queryUpdateById,
    queryDeleteById
};
