DROP TABLE IF EXISTS Evaluation;
DROP TABLE IF EXISTS Itineraire;
DROP TABLE IF EXISTS Inscription;
DROP TABLE IF EXISTS Arret;
DROP TABLE IF EXISTS Voyage;
DROP TABLE IF EXISTS Voiture;
DROP TABLE IF EXISTS Etudiant;

CREATE TABLE Etudiant (
    id_etudiant SERIAL PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL
);

CREATE TABLE Voiture (
    id_voiture SERIAL PRIMARY KEY,
    id_proprietaire INTEGER NOT NULL,
    type_voiture VARCHAR(50),
    couleur VARCHAR(50),
    nb_places_passager INTEGER NOT NULL,
    etat VARCHAR(50)
);


CREATE TABLE Voyage (
    id_voyage SERIAL PRIMARY KEY,
    id_voiture INTEGER NOT NULL,
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
    id_etudiant INTEGER NOT NULL,
    id_arret INTEGER NOT NULL,
    PRIMARY KEY (id_etudiant, id_arret),
    est_valide BOOLEAN DEFAULT TRUE
);

CREATE TABLE Itineraire (
    id_voyage INTEGER NOT NULL,
    id_arret INTEGER NOT NULL,
    CONSTRAINT pk_Itineraire PRIMARY KEY (id_voyage, id_arret)
);

CREATE TABLE Evaluation (
    id_emetteur INTEGER NOT NULL,
    id_receveur INTEGER NOT NULL,
    id_voyage INTEGER NOT NULL,
    CONSTRAINT pk_Evaluation PRIMARY KEY (id_emetteur, id_receveur, id_voyage),
    note INTEGER NOT NULL,
    commentaire VARCHAR(500)
);


ALTER TABLE Voiture
    ADD CONSTRAINT fk_Voiture FOREIGN KEY (id_proprietaire) REFERENCES Etudiant(id_etudiant);

ALTER TABLE Voyage
    ADD CONSTRAINT fk_Voyage FOREIGN KEY (id_voiture) REFERENCES Voiture(id_voiture);

ALTER TABLE Inscription
    ADD CONSTRAINT fk1_Inscription FOREIGN KEY (id_etudiant) REFERENCES Etudiant(id_etudiant),
    ADD CONSTRAINT fk2_Inscription FOREIGN KEY (id_arret) REFERENCES Arret(id_arret);

ALTER TABLE Evaluation
     ADD CONSTRAINT fk1_Evaluation FOREIGN KEY (id_emetteur) REFERENCES Etudiant(id_etudiant),
     ADD CONSTRAINT fk2_Evaluation FOREIGN KEY (id_receveur) REFERENCES Etudiant(id_etudiant),
     ADD CONSTRAINT fk3_Evaluation FOREIGN KEY (id_voyage) REFERENCES Voyage(id_voyage);

ALTER TABLE Itineraire
    ADD CONSTRAINT fk1_Itineraire FOREIGN KEY (id_voyage) REFERENCES Voyage(id_voyage),
    ADD CONSTRAINT fk2_Itineraire FOREIGN KEY (id_arret) REFERENCES Arret(id_arret);
    