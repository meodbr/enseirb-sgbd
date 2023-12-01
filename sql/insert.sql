
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
    ('Wilson', 'Mia'),
    ('William', 'Vidal'),
    ('Louise', 'Girard'),
    ('Théodore', 'Fournier'),
    ('Camille', 'Payet'),
    ('Soline', 'Brun'),
    ('Clément', 'Payet'),
    ('Bastien', 'Dufour'),
    ('Anna', 'Béthuleau'),
    ('Arthur', 'Louis'),
    ('Octave', 'Roger'),
    ('Iris', 'Louis'),
    ('Johan', 'Lucas'),
    ('Andréa', 'Barbier'),
    ('Clémentine', 'Coolen'),
    ('Augustin', 'Philippe'),
    ('Marceau', 'Roy'),
    ('Malo', 'Colin'),
    ('Cassandre', 'Lucas'),
    ('Emilie', 'Baron'),
    ('Benjamin', 'Guerin');

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
    (9, 'Electric', 'Blue', 4, 'Excellent'),
    (10, 'Roadster', 'Red', 2, 'Excellent'),
    (2, 'Coupe', 'Brown', 2, 'Average'),
    (6, 'Hatchback', 'Purple', 5, 'Good'),
    (7, 'Electric', 'Black', 4, 'Average'),
    (7, 'Minivan', 'Golden', 6, 'Excellent'),
    (14, 'Sedan', 'Black', 4, 'Average'),
    (17, 'Pickup', 'White', 3, 'Excellent');

-- Insertion des voyages
INSERT INTO Voyage (id_voiture, distance, date_depart, heure_depart) VALUES
    (1, 200, '2023-12-01', '08:00:00'),
    (2, 120, '2024-04-01', '10:30:00'),
    (3, 12, '2024-04-01', '12:45:00'),
    (4, 125, '2023-11-28', '09:15:00'),
    (5, 400, '2024-01-02', '11:30:00'),
    (1, 30, '2023-12-24', '09:00:00'),
    (1, 70, '2024-02-01', '11:00:00'),
    (6, 130, '2024-01-01', '11:34:00'),
    (7, 15, '2024-04-02', '16:30:00'),
    (8, 120, '2023-09-02', '11:13:00'),
    (8, 400, '2024-01-12', '15:30:00'),
    (9, 234, '2024-12-02', '07:56:00'),
    (10, 898, '2024-10-08', '11:54:00'),
    (10, 40, '2025-01-01', '16:30:00');

-- Insertion des arrêts
INSERT INTO Arret (id_voyage, ville, duree_estimee, prix_par_passager) VALUES
    (1, 'Talence', '08:30:00', 3.00),
    (1, 'Pessac', '11:00:00', 1.00),
    (2, 'Bègles', '13:00:00', 7.00),
    (3, 'Marseille', '10:00:00', 32.00),
    (1, 'Grenoble', '12:30:00', 28.00),
    (3, 'Talence', '11:30:00', 4.00),
    (4, 'Pessac', '15:00:00', 2.00),
    (5, 'Bègles', '01:00:00', 5.00),
    (6, 'Toulouse', '01:30:00', 10.00),
    (7, 'Lacanau', '01:10:00', 8.00),
    (8, 'Nimes', '06:30:00', 35.00),
    (9, 'Avignon', '07:00:00', 40.00),
    (10, 'Arcachon', '01:20:00', 7.00),
    (10, 'Lacanau', '01:40:00', 9.00),
    (5, 'Mérignac', '01:10:00', 6.00);

-- Insertion des inscriptions
INSERT INTO Inscription (id_etudiant, id_arret, est_valide) VALUES
    (1, 1, FALSE),
    (2, 2, TRUE),
    (3, 3, TRUE),
    (4, 4, TRUE),
    (5, 5, TRUE),
    (6, 1, TRUE),
    (7, 2, TRUE),
    (8, 3, FALSE),
    (9, 10, TRUE),
    (14, 10, TRUE),
    (11, 9, TRUE),
    (17,11, TRUE),
    (18, 11, TRUE),
    (22, 11, TRUE),
    (24, 9, TRUE);

-- Insertion des évaluations
INSERT INTO Evaluation (id_emetteur, id_receveur, id_voyage, note, commentaire) VALUES
    -- Voyage 1 evaluations
    (1, 3, 1, 4, 'Enjoyed the trip'),
    (2, 4, 1, 5, 'Excellent company'),
    (3, 1, 1, 3, 'Average experience'),
    (4, 6, 1, 5, 'Very comfortable journey'),
    (5, 1, 1, 4, 'Nice conversations'),
    (6, 8, 1, 3, 'Could be better'),
    (7, 9, 1, 4, 'Good overall'),
    -- Voyage 2 evaluations
    (1, 2, 2, 5, 'Awesome trip!'),
    (3, 1, 2, 4, 'Great time together'),
    (5, 6, 2, 3, 'Okay experience'),
    (7, 2, 2, 5, 'Perfect journey'),
    (9, 2, 2, 4, 'Enjoyed it'),
    -- Voyage 3 evaluations
    (2, 3, 3, 3, 'Could be improved'),
    (4, 5, 3, 4, 'Nice company'),
    (6, 3, 3, 5, 'Fantastic journey'),
    (8, 9, 3, 4, 'Very pleasant'),
    (1, 3, 3, 5, 'Excellent service'),
    -- Voyage 4 evaluations
    (3, 4, 4, 4, 'Comfortable ride'),
    (5, 6, 4, 3, 'Average trip'),
    (7, 4, 4, 5, 'Perfect journey'),
    (9, 4, 4, 4, 'Good experience'),
    (2, 3, 4, 5, 'Enjoyed the journey'),
    -- Voyage 5 evaluations
    (4, 5, 5, 5, 'Outstanding trip'),
    (6, 7, 5, 4, 'Nice conversations'),
    (8, 5, 5, 3, 'Average experience'),
    (1, 5, 5, 5, 'Excellent service'),
    (3, 4, 5, 4, 'Great time together'),
    --Voyage 6 evaluations
    (1, 11, 6, 5, 'Nice!'),
    (1, 24, 6, 5, 'Awesome trip!'),
    --Voyage 7 evaluations
    (9,1,9,4, 'Enjoyed the trip'),
    (14,1,9,2,'Could be better'),
    --Voyage 8 evaluations
    (6, 17, 8, 5, 'Fantastic journey'),
    (6, 18, 8, 4, 'Good experience'),
    (6, 22, 8, 4, 'Nice company');

-- Vérifier les données insérées
-- SELECT * FROM Etudiant;
-- SELECT * FROM Voiture;
-- SELECT * FROM Voyage;
-- SELECT * FROM Arret;
-- SELECT * FROM Inscription;
-- SELECT * FROM Evaluation;
