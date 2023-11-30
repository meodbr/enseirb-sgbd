
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
WHERE Arret.ville = $1;

-- les trajets proposés dans un intervalle de jours donné, 
SELECT * FROM Voyage 
WHERE date_depart >= $1
AND date_depart <= $2;

-- trajets pouvant desservir une ville donnée dans un intervalle de temps
SELECT Voyage.*
FROM Voyage NATURAL JOIN Arret
WHERE ville = $1
AND date_depart >= $2
AND date_depart <= $3;