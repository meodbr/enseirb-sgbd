
-- Insertion des étudiants
INSERT INTO Etudiant (nom, prenom) VALUES
    ('Doe', 'John'),
    ('Smith', 'Alice'),
    ('Johnson', 'Bob'),
    ('Williams', 'Emma'),
    ('Brown', 'Charlie'),
    ('Davis', 'Olivia'),
    ('Miller', 'Liam'),
    ('Garcia', 'Sophia'),
    ('Wilson', 'Mia');

-- Insertion des voitures
INSERT INTO Voiture (id_proprietaire, type_voiture, couleur, nb_places_passager, etat) VALUES
    (1, 'Sedan', 'Blue', 4, 'Good'),
    (2, 'SUV', 'Black', 7, 'Excellent'),
    (3, 'Hatchback', 'Red', 5, 'Average'),
    (4, 'Convertible', 'White', 2, 'Excellent'),
    (5, 'Pickup', 'Green', 3, 'Good'),
    (6, 'Minivan', 'Silver', 6, 'Excellent'),
    (7, 'Truck', 'Gray', 3, 'Average'),
    (8, 'Coupe', 'Yellow', 2, 'Good'),
    (9, 'Electric', 'Blue', 4, 'Excellent');

-- Insertion des voyages
INSERT INTO Voyage (id_voiture, date_depart, heure_depart) VALUES
    (1, '2023-12-01', '08:00:00'),
    (2, '2024-02-07', '10:30:00'),
    (3, '2024-04-01', '12:45:00'),
    (4, '2023-11-28', '09:15:00'),
    (5, '2024-01-02', '11:30:00');

-- Insertion des arrêts
INSERT INTO Arret (id_voyage, ville, duree_estimee, prix_par_passager) VALUES
    (1, 'Talence', '08:30:00', 3.00),
    (1, 'Pessac', '11:00:00', 1.00),
    (2, 'Bègles', '13:00:00', 7.00),
    (3, 'Marseille', '10:00:00', 32.00),
    (1, 'Grenoble', '12:30:00', 28.00),
    (3, 'Talence', '11:30:00', 4.00),
    (4, 'Pessac', '15:00:00', 2.00),
    (5, 'Bègles', '01:00:00', 5.00);

-- Insertion des inscriptions
INSERT INTO Inscription (id_etudiant, id_arret, est_valide) VALUES
    (1, 1, FALSE),
    (2, 2, TRUE),
    (3, 3, FALSE),
    (4, 4, TRUE),
    (5, 5, TRUE),
    (6, 1, FALSE),
    (7, 2, FALSE),
    (8, 3, FALSE),
    (9, 4, TRUE);

-- Insertion des évaluations
INSERT INTO Evaluation (id_emetteur, id_receveur, id_voyage, note, commentaire) VALUES
    (1, 2, 1, 4, 'Great trip!'),
    (2, 3, 2, 5, 'Awesome service!'),
    (3, 1, 3, 3, 'Could be better'),
    (4, 5, 4, 5, 'Perfect journey'),
    (5, 4, 5, 4, 'Good experience'),
    (2, 1, 1, 4, 'Good'),
    (5, 1, 1, 1, 'Bad');

-- Vérifier les données insérées
SELECT * FROM Etudiant;
SELECT * FROM Voiture;
SELECT * FROM Voyage;
SELECT * FROM Arret;
SELECT * FROM Inscription;
SELECT * FROM Itineraire;
SELECT * FROM Evaluation;
