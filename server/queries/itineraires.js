const db = require("../db");

function queryCreate(itineraire){
    return (`INSERT INTO itineraire (id_voyage, id_arret) VALUES ('${itineraire.idVoyage}', '${itineraire.idArret}')`);
}

function querySelectAll() {
    return("SELECT * from itineraire");
}

function querySelectId(idVoyage){
    return(`SELECT * from itineraire where id_voyage=${idVoyage}`);
}

function queryUpdateById(idVoyage, idArret, newIdArret){
    return(`UPDATE itineraire SET  id_arret = '${newIdArret}' WHERE id_voyage=${idVoyage} AND id_arret=${idArret}`);
}

function queryDeleteById(idVoyage, idArret){
    return(`DELETE from itineraire where id_voyage=${idVoyage} AND id_arret=${idArret}`);
}

module.exports = {
    queryCreate,
    querySelectAll,
    querySelectId,
    queryUpdateById,
    queryDeleteById
};
