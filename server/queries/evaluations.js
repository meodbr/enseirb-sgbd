const db = require("../db");

function queryCreate(evaluation){
    return (`INSERT INTO evaluation (id_emetteur, id_receveur, id_voyage, note, commentaire) VALUES ('${evaluation.idEmetteur}', '${evaluation.idReceveur}', '${evaluation.idVoyage}', '${evaluation.note}', '${evaluation.commentaire}')`);
}

function querySelectAll() {
    return("SELECT * from evaluation");
}

function querySelectId(id){
    return(`SELECT * from evaluation where id_emetteur=${id}`);
}

function queryUpdateById(evaluation){
    return(`UPDATE evaluation SET note='${evaluation.note}', commentaire='${evaluation.commentaire}' WHERE id_emetteur=${evaluation.idEmetteur} AND id_receveur=${evaluation.idReceveur} AND id_voyage=${evaluation.idVoyage}`);
}

function queryDeleteById(idEmetteur, idReceveur, idVoyage){
    return(`DELETE from evaluation where id_emetteur=${idEmetteur} AND id_receveur=${idReceveur} AND id_voyage=${idVoyage}`);
}

module.exports = {
    queryCreate,
    querySelectAll,
    querySelectId,
    queryUpdateById,
    queryDeleteById
};
