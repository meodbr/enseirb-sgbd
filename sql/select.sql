
-- informations sur les conducteurs et passagers :

-- tous les étudiants
SELECT * FROM etudiant;

-- étudiant par ID
SELECT * FROM etudiant WHERE id_etudiant = $1;

-- étudiant par nom ou prénom
SELECT * FROM etudiant 
WHERE nom LIKE '%' || $1 || '%' OR prenom LIKE '%' || $1 || '%';

-- liste des véhicules disponibles pour un jour donné pour une ville donnée
SELECT Voiture.* 
FROM Voiture NATURAL JOIN Voyage NATURAL JOIN ARRET 
WHERE Arret.ville = $1;

-- les trajets proposés dans un intervalle de jours donné, 
SELECT * FROM Voyage 
WHERE date_depart >= $1
AND date_depart <= $2;

-- trajets pouvant desservir une ville donnée dans un intervalle de temps
SELECT trajets.*
FROM trajets NATURAL JOIN Arret
WHERE ville = $1
AND date_depart >= $2
AND date_depart <= $3;