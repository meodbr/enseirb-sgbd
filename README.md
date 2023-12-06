## enseirb-sgbd
Projet de SGBD semestre 7 enseirb-matmeca
Desbois-Renaudin Méo, Gajic Maxime, Facen Théo, Duchiron Jules

## structure du projet
- server/ : partie back-end du projet (nodejs)
- front/ : partie front-end du projet (angular)
- sql/ : script de creation et de drop de la BDD (postgreSQL)

## executer le projet
- Déployer la base de données :
$ sudo -u postgres pqsl
postgres=# CREATE DATABASE projets7e4;
postgres=# \c projets7e4
projets7e4=# \i sql/create.sql
projets7e4=# \i sql/insert.sql

Au cas ou, voici les informations qu'utilise le server back-end pour se connecter à la base :
{
    user: 'theofacen',
    password: 'dest',
    host: 'localhost',
    database: 'sgbds7e4',
    port: 5432
}

- Lancer le server back-end :
$ cd server
$ npm install
$ npm start

(vous pouvez lancer le server back-end en arrière plan pour ne pas avoir à lancer de nouveau terminal : $ npm start &)

- Lancer le front-end :
(se mettre à la racine du projet dans un nouveau terminal)
$ cd front
$ npm install
$ npm start

- Regarder le site :
Ouvrez votre navigateur et entrez l'url donnée lors du lancement du front-end
Normalement cette url : http://localhost:4200/

Vous pouvez aussi accéder au back-end via les routes prévues dans queries/routes/ à cette url : http://localhost:1234/
Par exemple : http://localhost:1234/api/etudiant/name/john
cette url recherche les étudiants dont le nom ou prénom contient john.

## à noter

Il est très important de noter que vu notre implémentation du serveur en Node.js, nous ne nous servons pas des fichiers select.sql et update.sql. Les requêtes utilisées par le site sont répertoriées dans le dossier server/queries/.

Pour que vous puissiez y avoir accès, nous avons recopié les requêtes dans le fichier select.sql.

Comme convenu, nous n'avons pas déployé le site sur bordeaux-inp car cela semblait irréalisable en nodejs.
