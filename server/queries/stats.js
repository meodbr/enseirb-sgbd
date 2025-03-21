const db = require("../db");

function queryStatConducteur(){
    return (`SELECT e.nom, e.prenom, AVG(ev.note) as avg
    FROM etudiant e JOIN evaluation ev ON e.id_etudiant=ev.id_receveur natural JOIN voyage vo natural JOIN voiture v 
    where ev.id_receveur = v.id_proprietaire
    group by (e.id_etudiant)
    order by (avg) DESC`);
}

function queryStatVille() {
    return(`SELECT a.ville, count(v.id_voyage) as nombre_arret
    FROM voyage v natural join  arret a
    group by (a.ville)
    order by (nombre_arret) DESC LIMIT 5`);
}

function queryStatDistance(){
    return(`SELECT avg(dist) FROM (
    SELECT v.date_depart, avg(v.distance) as dist
    from voyage v
    group by (v.date_depart)) as avgdist`);
}

function queryStatPassagers(){
    return(`SELECT nb_passager/nb_voyage as moyenne_passager 
    FROM (
        (SELECT sum(cpt) as nb_passager 
        from (
            SELECT v.id_voyage, count(e.id_etudiant) AS cpt
            FROM Etudiant e NATURAL JOIN inscription i NATURAL JOIN arret a NATURAL JOIN voyage v
            GROUP BY (v.id_voyage,i.est_valide)
            Having i.est_valide = 'TRUE'
            order by (v.id_voyage) ASC
             ) as foo1) as foo2
    CROSS JOIN
        (SELECT count(v.id_voyage) as nb_voyage
        from voyage v) as foo3
    );`);
}


module.exports = {
    queryStatConducteur,
    queryStatVille,
    queryStatDistance,
    queryStatPassagers,
};
