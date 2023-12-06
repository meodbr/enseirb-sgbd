
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
    (1, 'Sedan', 'Blue', 3, 'Good'),
    (2, 'SUV', 'Black', 6, 'Excellent'),
    (3, 'Hatchback', 'Red', 4, 'Average'),
    (4, 'Convertible', 'White', 1, 'Excellent'),
    (5, 'Pickup', 'Green', 2, 'Good'),
    (6, 'Minivan', 'Silver', 5, 'Excellent'),
    (7, 'Truck', 'Gray', 2, 'Average'),
    (8, 'Coupe', 'Yellow', 1, 'Good'),
    (9, 'Electric', 'Blue', 3, 'Excellent'),
    (10, 'Roadster', 'Red', 1, 'Excellent'),
    (2, 'Coupe', 'Brown', 1, 'Average'),
    (6, 'Hatchback', 'Purple', 4, 'Good'),
    (7, 'Electric', 'Black', 3, 'Average'),
    (7, 'Minivan', 'Golden', 5, 'Excellent'),
    (14, 'Sedan', 'Black', 3, 'Average'),
    (17, 'Pickup', 'White', 2, 'Excellent');

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
    (11, 180, '2023-12-15', '09:30:00'),
    (12, 250, '2023-11-20', '14:15:00'),
    (13, 80, '2024-03-05', '08:45:00'),
    (14, 300, '2023-10-10', '12:00:00'),
    (5, 150, '2023-12-05', '11:00:00'),
    (6, 220, '2024-02-20', '13:45:00'),
    (7, 180, '2024-03-15', '10:15:00'),
    (8, 280, '2023-11-05', '15:30:00');

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
    (5, 'Mérignac', '01:10:00', 6.00),
    (11, 'Bordeaux', '00:45:00', 4.00),
    (11, 'Libourne', '01:15:00', 2.00),
    (11, 'Angoulême', '02:00:00', 12.00),
    (12, 'Pau', '01:30:00', 8.00),
    (12, 'Tarbes', '01:00:00', 6.00),
    (13, 'Bayonne', '00:45:00', 5.00),
    (13, 'Biarritz', '00:30:00', 3.00),
    (13, 'Saint-Jean-de-Luz', '01:00:00', 7.00),
    (14, 'La Rochelle', '00:45:00', 6.00),
    (14, 'Nantes', '02:30:00', 15.00),
    (14, 'Rennes', '01:15:00', 9.00),
    (15, 'Montpellier', '00:30:00', 3.50),
    (15, 'Nîmes', '01:00:00', 5.00),
    (15, 'Avignon', '01:15:00', 6.50),
    (16, 'Tours', '01:45:00', 10.00),
    (16, 'Orléans', '01:30:00', 8.00),
    (17, 'Strasbourg', '02:15:00', 12.00),
    (17, 'Colmar', '01:00:00', 7.00),
    (17, 'Mulhouse', '01:30:00', 9.00),
    (18, 'Brest', '02:00:00', 15.00),
    (18, 'Quimper', '01:30:00', 11.00),
    (18, 'Lorient', '01:15:00', 8.00);

-- Insertion des inscriptions
INSERT INTO Inscription (id_etudiant, id_arret, est_valide) VALUES

    -- voy 1 proprietaire 1 exclu,voiture 1 : 4 places max,  arrets = 1,2 et 5
    (1, 1, FALSE), -- le conducteur ne peut pas s'inscrire à son propre voyage
    (2,1, TRUE),
    (5,1, TRUE),
    (8,2, TRUE),
    (9,2, FALSE), -- 3 places sont déjà occupées    
    (1, 2, FALSE),
    (1, 5, FALSE),

    -- voy 2 , voiture 2 : 5 places max, arrets = 3
    (2, 3, FALSE),
    (1, 3, TRUE),
    (4, 3, TRUE),
    (6, 3, TRUE),
    (7, 3, TRUE),
    (10, 3, TRUE),
    (11, 3, TRUE),
    (12, 3, FALSE), -- Déjà 6 personnes inscrites


    -- voy 3 , voiture 3 : 4 places max, arrets = 4 et 6
    (3, 4, FALSE),
    (5, 4, TRUE),
    (8, 4, TRUE),
    (9, 6, TRUE),
    (13, 6, TRUE),
    (10, 6, FALSE), -- Déjà 4 personnes inscrites
    (3, 6, FALSE),

    -- voy 4, voiture 4 : 1 places max, arrets = 7
    (4, 7, FALSE),
    (16, 7, TRUE),
    (6, 7, FALSE), -- Déjà 1 personnes inscrites

    -- voy 5, voiture 5 : 2 places max, arrets = 8,15
    (5, 8, FALSE),
    (7, 8, TRUE),
    (9, 15, TRUE),
    (11, 15, FALSE), -- Déjà 2 personnes inscrites
    (5, 15, FALSE),

    -- voy 6 , voiture 1 : 3 places max, arrets = 9
    (1,9,FALSE),
    (21,9,TRUE),
    (22,9,TRUE),
    (23,9,TRUE),
    (26,9,FALSE), -- Déjà 3 personnes inscrites

    -- voy 7, voiture 1 : 3 places max, arrets = 10
    (1,10,FALSE),
    (11,10,TRUE),
    (12,10,TRUE),
    (13,10,TRUE),
    (16,10,FALSE), -- Déjà 3 personnes inscrites

    -- voy 8, voiture 6 : 5 places max, arrets = 11
    (6,11,FALSE),
    (7,11,TRUE),
    (8,11,TRUE),
    (9,11,TRUE),

    -- voy 9, voiture 7 : 3 places max, arrets = 12
    (7,12,FALSE),

    -- voy 10, voiture 8 : 1 places max, arrets = 13,14
    (8,13,FALSE),
    (1,14,TRUE),
    (11,13,FALSE); -- Déjà 1 personnes inscrites


-- Insertion des évaluations
INSERT INTO Evaluation (id_emetteur, id_receveur, id_voyage, note, commentaire) VALUES
    -- Voyage 1 evaluations
    (2, 1, 1, 4, 'Enjoyed the trip'),
    (5, 1, 1, 5, 'Excellent company'),
    (8, 1, 1, 3, 'Average experience'),
    (1, 2, 1, 5, 'Very comfortable journey'),

    -- Voyage 2 evaluations
    (1, 2, 2, 5, 'Awesome trip!'),
    (4, 2, 2, 4, 'Great time together'),
    (6, 2, 2, 3, 'Okay experience'),
    (7, 2, 2, 5, 'Perfect journey'),
    (10, 2, 2, 4, 'Enjoyed it'),
    (11, 2, 2, 4, 'Nice conversations'),

    -- Voyage 3 evaluations
    (5, 3, 3, 3, 'Could be improved'),
    (8, 3, 3, 4, 'Nice company'),
    (9, 3, 3, 5, 'Fantastic journey'),
    (13, 3, 3, 4, 'Very pleasant'),

    -- Voyage 4 evaluations
    (16, 4, 4, 4, 'Comfortable ride'),

    -- Voyage 5 evaluations
    (7, 5, 5, 5, 'Outstanding trip'),
    (9, 5, 5, 4, 'Nice conversations'),

    --Voyage 6 evaluations
    (21, 1, 6, 5, 'Nice!'),
    (22, 1, 6, 5, 'Awesome trip!'),
    (23, 1, 6, 3, 'Could be better'),

    --Voyage 7 evaluations
    (11, 1, 7, 4, 'Enjoyed the trip'),
    (12, 1, 7, 2,'Could be better'),
    (13, 1, 7, 4, 'Good overall'),

    --Voyage 8 evaluations
    (7, 6, 8, 5, 'Fantastic journey'),
    (8, 6, 8, 4, 'Good experience'),
    (9, 6, 8, 4, 'Nice company'),

    -- Voyage 9 evaluations

    -- Voyage 10 evaluations
    (1, 8, 10, 5, 'Excellent service');

-- Vérifier les données insérées
-- SELECT * FROM Etudiant;
-- SELECT * FROM Voiture;
-- SELECT * FROM Voyage;
-- SELECT * FROM Arret;
-- SELECT * FROM Inscription;
-- SELECT * FROM Evaluation;