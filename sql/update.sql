-- Requêtes typiques pour la modification de notre base pour la table étudiant :
-- Le processus est le même pour toutes nos tables

-- Requête SQL pour insérer un nouvel étudiant dans la table 'etudiant'
INSERT INTO etudiant (nom, prenom) VALUES ($1, $2);

-- Requête SQL pour mettre à jour les informations d'un étudiant spécifié par son identifiant
UPDATE etudiant SET nom = $2, prenom = $3 WHERE id_etudiant=$1;

-- Requête SQL pour supprimer un étudiant en particulier basé sur son identifiant
DELETE FROM etudiant WHERE id_etudiant=$1;
