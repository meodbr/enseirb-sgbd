/*--moyenne des passagers par voyage
select nb_passager/nb_voyage as moyenne_passager from (

(select sum(cpt) as nb_passager from 
(SELECT v.id_voyage, count(e.id_etudiant) AS cpt
FROM Etudiant e full JOIN inscription i on e.id_etudiant = i.id_etudiant full JOIN arret a on a.id_arret = i.id_arret full JOIN voyage v on v.id_voyage = a.id_voyage
GROUP BY (v.id_voyage,i.est_valide)
Having i.est_valide = 'TRUE'
order by (v.id_voyage) ASC)) cross join 

(SELECT count(v.id_voyage) as nb_voyage
from voyage v));
*/
/*--test fonction pas finie
CREATE OR REPLACE FUNCTION moyenne_distance ()
RETURNS TABLE (
    date_depart DATE
    
    )
LANGUAGE plpgsql
AS $$
BEGIN
RETURN QUERY SELECT v.date_depart, avg(v.distance) as dist
from voyage v;
--group by (v.date_depart);

END;
$$ ;

SELECT * from moyenne_distance();
*/
/*
durée estimée à rajouter pour 6)
préciser dans le commentaire si c'est un conducteur ou un passager pour 7)
8) chaud 5) bloqué sur probleme avec count les null
1) 2) faisable
3) pas tout compris
4) faisable

*/
/*--classement des meilleurs conducteurs (moyenne des notes)
SELECT e.nom, e.prenom, AVG(ev.note) as avg
FROM etudiant e JOIN evaluation ev ON e.id_etudiant=ev.id_receveur join voyage vo on vo.id_voyage = ev.id_voyage join voiture v on vo.id_voiture = v.id_voiture 
where ev.id_receveur = v.id_proprietaire
group by (e.id_etudiant)
order by (avg) DESC;*/

/*--classement des villes en fonction des nombres de trajet
SELECT a.ville, count(v.id_voyage) as nombre_arret
FROM voyage v join itineraire i on i.id_voyage = v.id_voyage join arret a on a.id_arret = i.id_arret
group by (a.ville)
order by (nombre_arret) DESC;*/

/*--moyenne des distances par jour
SELECT v.date_depart, avg(v.distance) as dist
from voyage v
group by (v.date_depart);*/