
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
Select * FROM Voyage 
WHERE date_depart >= TO_DATE($1, 'DD-MM-YYYY') 
AND date_depart <= TO_DATE($2, 'DD-MM-YYYY');