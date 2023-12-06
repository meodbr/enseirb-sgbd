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

// liste des véhicules disponibles pour un jour donné pour une ville donnée
function queryAvailableVehicles() {
    return(`SELECT DISTINCT id_voiture, id_proprietaire, type_voiture, couleur, nb_places_passager, etat 
        FROM(SELECT vo.*, id_voyage, count(est_valide) as nb_places_prises 
            FROM Arret a NATURAL JOIN Voyage v NATURAL JOIN Voiture vo NATURAL LEFT JOIN (SELECT * FROM inscription WHERE est_valide = 'TRUE') as Inscription 
            GROUP BY id_voyage, nb_places_passager, vo.id_voiture
            ORDER BY id_voyage) as voi
        NATURAL JOIN Voyage voy NATURAL JOIN Arret a;
        WHERE nb_places_prises < nb_places_passager
        AND voy.date_depart = $1
        AND a.ville = $2;`);
}

function queryGetTrip(id){
    return(`SELECT * from voyage where id_voiture=${id}`);
}

module.exports = {
    queryCreate,
    querySelectAll,
    querySelectId,
    queryUpdateById,
    queryDeleteById,
    queryAvailableVehicles,
    queryGetTrip
};

