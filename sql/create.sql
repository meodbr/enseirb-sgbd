DROP TABLE IF EXISTS Evaluation;
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
    id_voiture INTEGER,
    distance INTEGER NOT NULL,
    date_depart DATE NOT NULL,
    heure_depart TIME NOT NULL
);

CREATE TABLE Arret (
    id_arret SERIAL PRIMARY KEY,
    id_voyage INTEGER NOT NULL,
    ville VARCHAR(50) NOT NULL,
    duree_estimee TIME NOT NULL,
    prix_par_passager NUMERIC(10,2) NOT NULL
);

CREATE TABLE Inscription (
    id_etudiant INTEGER NOT NULL,
    id_arret INTEGER NOT NULL,
    PRIMARY KEY (id_etudiant, id_arret),
    est_valide BOOLEAN DEFAULT TRUE
);

CREATE TABLE Evaluation (
    id_evaluation SERIAL PRIMARY KEY,
    id_emetteur INTEGER,
    id_receveur INTEGER,
    id_voyage INTEGER,
    -- CONSTRAINT pk_Evaluation PRIMARY KEY (id_emetteur, id_receveur, id_voyage),
    note INTEGER NOT NULL,
    commentaire VARCHAR(500)
);


ALTER TABLE Voiture
    ADD CONSTRAINT fk_Voiture FOREIGN KEY (id_proprietaire) REFERENCES Etudiant(id_etudiant) ON DELETE CASCADE;

ALTER TABLE Voyage
    ADD CONSTRAINT fk_Voyage FOREIGN KEY (id_voiture) REFERENCES Voiture(id_voiture);

ALTER TABLE Arret
    ADD CONSTRAINT fk_Voiture FOREIGN KEY (id_voyage) REFERENCES Voyage(id_voyage) ON DELETE CASCADE;

ALTER TABLE Inscription
    ADD CONSTRAINT fk1_Inscription FOREIGN KEY (id_etudiant) REFERENCES Etudiant(id_etudiant) ON DELETE CASCADE,
    ADD CONSTRAINT fk2_Inscription FOREIGN KEY (id_arret) REFERENCES Arret(id_arret) ON DELETE CASCADE;

ALTER TABLE Evaluation
     ADD CONSTRAINT fk1_Evaluation FOREIGN KEY (id_emetteur) REFERENCES Etudiant(id_etudiant),
     ADD CONSTRAINT fk2_Evaluation FOREIGN KEY (id_receveur) REFERENCES Etudiant(id_etudiant),
     ADD CONSTRAINT fk3_Evaluation FOREIGN KEY (id_voyage) REFERENCES Voyage(id_voyage);


-- deletion handling

CREATE OR REPLACE FUNCTION update_voyage_on_voiture_delete()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE Voyage
    SET id_voiture = NULL
    WHERE id_voiture = OLD.id_voiture;

    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_evaluations_on_student_delete()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE Evaluation
    SET id_emetteur = NULL
    WHERE id_emetteur = OLD.id_etudiant;

    UPDATE Evaluation
    SET id_receveur = NULL
    WHERE id_receveur = OLD.id_etudiant;

    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_evaluations_on_voyage_delete()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE Evaluation
    SET id_voyage = 0
    WHERE id_voyage = OLD.id_voyage;

    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_voyage_trigger
BEFORE DELETE ON Voiture
FOR EACH ROW
EXECUTE FUNCTION update_voyage_on_voiture_delete();

CREATE TRIGGER update_evaluations_trigger
BEFORE DELETE ON Etudiant
FOR EACH ROW
EXECUTE FUNCTION update_evaluations_on_student_delete();

CREATE TRIGGER update_evaluations_on_voyage_delete_trigger
BEFORE DELETE ON Voyage
FOR EACH ROW
EXECUTE FUNCTION update_evaluations_on_voyage_delete();