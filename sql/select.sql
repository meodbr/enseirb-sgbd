
-- informations sur les conducteurs et passagers :

-- tous les étudiants
SELECT * FROM etudiant;

-- étudiant par ID
SELECT * FROM etudiant WHERE id_etudiant = $1;

-- CONSULTATIONS

-- étudiant par nom ou prénom
SELECT * FROM etudiant 
WHERE LOWER(nom) LIKE '%' || LOWER($1) || '%' OR LOWER(prenom) LIKE '%' || LOWER($1) || '%';

-- liste des véhicules disponibles pour un jour donné pour une ville donnée
SELECT Voiture.* 
FROM Voiture NATURAL JOIN Voyage NATURAL JOIN ARRET 
WHERE Voyage.date_depart = $1 AND Arret.ville = $2;

-- les trajets proposés dans un intervalle de jours donné, 
SELECT a.* FROM Voyage v NATURAL JOIN Arret a
WHERE date_depart >= $1
AND date_depart <= $2;

-- trajets pouvant desservir une ville donnée dans un intervalle de temps
SELECT Voyage.*
FROM Voyage NATURAL JOIN Arret
WHERE ville = $1
AND date_depart >= $2
AND date_depart <= $3;

--STATISTIQUES

--moyenne des passagers sur l’ensemble des trajets effectués
SELECT nb_passager/nb_voyage as moyenne_passager 
    FROM (
        (SELECT sum(cpt) as nb_passager 
        from (
            SELECT v.id_voyage, count(e.id_etudiant) AS cpt
            FROM Etudiant e NATURAL JOIN inscription i NATURAL JOIN arret a NATURAL JOIN voyage v
            GROUP BY (v.id_voyage,i.est_valide)
            Having i.est_valide = 'TRUE'
            order by (v.id_voyage) ASC
             )) 
    CROSS JOIN
        (SELECT count(v.id_voyage) as nb_voyage
        from voyage v)
    );

--moyenne des distances parcourues en covoiturage par jour
SELECT avg(dist)
from (
SELECT v.date_depart, avg(v.distance) as dist
from voyage v
group by (v.date_depart)
)
;

--classement des meilleurs conducteurs d’aprés les avis
SELECT e.nom, e.prenom, AVG(ev.note) as avg
FROM etudiant e JOIN evaluation ev ON e.id_etudiant=ev.id_receveur JOIN voyage vo ON vo.id_voyage = ev.id_voyage JOIN voiture v ON vo.id_voiture = v.id_voiture 
where ev.id_receveur = v.id_proprietaire
group by (e.id_etudiant)
order by (avg) DESC
LIMIT 5;

--classement des villes selon le nombre de trajets qui les dessert
SELECT a.ville, count(v.id_voyage) as nombre_arret
FROM voyage v join  arret a on a.id_voyage = v.id_voyage
group by (a.ville)
order by (nombre_arret) DESC
LIMIT 5;