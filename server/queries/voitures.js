function queryCreate(voiture){
    return (`INSERT INTO voiture (id_proprietaire, type_voiture, couleur, nb_places_passager, etat) VALUES ('${voiture.idProprietaire}', '${voiture.type}', '${voiture.couleur}', '${voiture.nbPlacesPassager}', '${voiture.etat}')`);
}


function querySelectAll() {
    return("SELECT * from voiture");
}

function querySelectId(id){
    return(`SELECT * from voiture where id_voiture=${id}`);
}

function queryUpdateById(id, voiture){
    return(`UPDATE voiture SET id_proprietaire='${voiture.idProprietaire}', type_voiture='${voiture.type}', couleur='${voiture.couleur}', nb_places_passager='${voiture.nbPlacesPassager}', etat='${voiture.etat}' WHERE id_voiture=${id}`);
}

function queryDeleteById(id){
    return(`DELETE from voiture where id_voiture=${id}`);
}

module.exports = {
    queryCreate,
    querySelectAll,
    querySelectId,
    queryUpdateById,
    queryDeleteById
};

