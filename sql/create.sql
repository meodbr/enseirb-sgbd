

CREATE TABLE Etudiant (
    id_etudiant SERIAL PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL
);

CREATE TABLE Voiture (
    id_voiture SERIAL PRIMARY KEY,
    FOREIGN KEY id_proprietaire REFERENCES Etudiant(id_etudiant),
    type_voiture VARCHAR(50),
    couleur VARCHAR(50),
    nb_places_passager INTEGER NOT NULL,
    etat VARCHAR(50)
);

CREATE TABLE Trajet (
    id_trajet SERIAL PRIMARY KEY,
    FOREIGN KEY id_voiture REFERENCES Etudiant(id_voiture),
    date_depart DATE NOT NULL,
    heure_depart TIME NOT NULL
);

CREATE TABLE Arret (
    id_arret SERIAL PRIMARY KEY,
    ville VARCHAR(50) NOT NULL,
    heure_passage TIME NOT NULL,
    prix_par_passager NUMERIC(10,2) NOT NULL
);

CREATE TABLE Inscription (
    FOREIGN KEY id_etudiant REFERENCES Etudiant(id_etudiant),
    FOREIGN KEY id_arret REFERENCES Arret(id_arret),
    PRIMARY KEY (id_etudiant, id_arret),
    est_valide BOOLEAN DEFAULT TRUE
);

CREATE TABLE Desservir (
    FOREIGN KEY id_trajet REFERENCES Trajet(id_trajet),
    FOREIGN KEY id_arret REFERENCES Arret(id_arret),
    PRIMARY KEY (id_trajet, id_arret),
);

CREATE TABLE Evaluer (
    FOREIGN KEY id_emetteur REFERENCES Etudiant(id_etudiant),
    FOREIGN KEY id_receveur REFERENCES Etudiant(id_etudiant),
    FOREIGN KEY id_trajet REFERENCES Trajet(id_trajet),
    PRIMARY KEY (id_emetteur, id_receveur, id_trajet),
    note INTEGER NOT NULL,
    commentaire VARCHAR(500)
);