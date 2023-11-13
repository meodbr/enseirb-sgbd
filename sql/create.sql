

CREATE TABLE Etudiant (
    id_etudiant SERIAL PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL
);

CREATE TABLE Voiture (
    id_voiture SERIAL PRIMARY KEY,
    id_proprietaire INTEGER,
    type_voiture VARCHAR(50),
    couleur VARCHAR(50),
    nb_places_passager INTEGER NOT NULL,
    etat VARCHAR(50),
    FOREIGN KEY (id_proprietaire) REFERENCES Etudiant(id_etudiant)
);

CREATE TABLE Trajet (
    id_trajet SERIAL PRIMARY KEY,
    id_voiture INTEGER,
    date_depart DATE NOT NULL,
    heure_depart TIME NOT NULL,
    FOREIGN KEY (id_voiture) REFERENCES Voiture(id_voiture)
);

CREATE TABLE Arret (
    id_arret SERIAL PRIMARY KEY,
    ville VARCHAR(50) NOT NULL,
    heure_passage TIME NOT NULL,
    prix_par_passager NUMERIC(10,2) NOT NULL
);

CREATE TABLE Inscription (
    id_etudiant INTEGER,
    id_arret INTEGER,
    FOREIGN KEY (id_etudiant) REFERENCES Etudiant(id_etudiant),
    FOREIGN KEY (id_arret) REFERENCES Arret(id_arret),
    PRIMARY KEY (id_etudiant, id_arret),
    est_valide BOOLEAN DEFAULT TRUE
);

CREATE TABLE Desservir (
    id_trajet INTEGER,
    id_arret INTEGER,
    FOREIGN KEY (id_trajet) REFERENCES Trajet(id_trajet),
    FOREIGN KEY (id_arret) REFERENCES Arret(id_arret),
    PRIMARY KEY (id_trajet, id_arret)
);

CREATE TABLE Evaluer (
    id_emetteur INTEGER,
    id_receveur INTEGER,
    id_trajet INTEGER,
    FOREIGN KEY (id_emetteur) REFERENCES Etudiant(id_etudiant),
    FOREIGN KEY (id_receveur) REFERENCES Etudiant(id_etudiant),
    FOREIGN KEY (id_trajet) REFERENCES Trajet(id_trajet),
    PRIMARY KEY (id_emetteur, id_receveur, id_trajet),
    note INTEGER NOT NULL,
    commentaire VARCHAR(500)
);

 -- DROP TABLE Evaluer;
 -- DROP TABLE Desservir;
 -- DROP TABLE Inscription;
 -- DROP TABLE Arret;
 -- DROP TABLE Trajet;
 -- DROP TABLE Voiture;
 -- DROP TABLE Etudiant;