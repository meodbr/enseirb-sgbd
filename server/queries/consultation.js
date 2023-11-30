const db = require("../db");

// liste des véhicules disponibles pour un jour donné pour une ville donnée
function queryAvailableVehicles() {
    return('SELECT Voiture.* FROM Voiture NATURAL JOIN Voyage NATURAL JOIN ARRET WHERE Arret.ville = $1');
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
    queryAvailableVehicles,
    queryVoyageToCityBetweenDates,
    queryVoyageBetweenDates
};
