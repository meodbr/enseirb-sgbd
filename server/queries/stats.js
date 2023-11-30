const db = require("../db");

function queryStatConducteur(){
    return (`SELECT e.nom, e.prenom, AVG(ev.note) as avg
    FROM etudiant e JOIN evaluation ev ON e.id_etudiant=ev.id_receveur join voyage vo on vo.id_voyage = ev.id_voyage join voiture v on vo.id_voiture = v.id_voiture 
    where ev.id_receveur = v.id_proprietaire
    group by (e.id_etudiant)
    order by (avg) DESC`);
}

function queryStatVille() {
    return(`SELECT a.ville, count(v.id_voyage) as nombre_arret
    FROM Voyage v NATURAL JOIN Arret a
    group by (a.ville)
    order by (nombre_arret) DESC`);
}

function queryStatDistance(){
    return(`SELECT v.date_depart, avg(v.distance) as dist
    from voyage v
    group by (v.date_depart)`);
}

function queryStatPassagers(){
    return(`SELECT v.date_depart, avg(v.distance) as dist
    from voyage v
    group by (v.date_depart)`);
}


module.exports = {
    queryStatConducteur,
    queryStatVille,
    queryStatDistance,
    queryStatPassagers,
};
