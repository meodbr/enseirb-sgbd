const db = require("../db");

function queryCreate(evaluation){
    return (`INSERT INTO evaluation (id_emetteur, id_receveur, id_voyage, note, commentaire) VALUES ('${evaluation.idEmetteur}', '${evaluation.idReceveur}', '${evaluation.idVoyage}', '${evaluation.note}', '${evaluation.commentaire}')`);
}

function querySelectAll() {
    return("SELECT * from evaluation");
}

function querySelectId(id){
    return(`SELECT * from evaluation where id_evaluation=${id}`);
}

function queryUpdateById(evaluation){
    return(`UPDATE evaluation SET note='${evaluation.note}', commentaire='${evaluation.commentaire}' WHERE id_evaluation=${evaluation.idEvaluation}`);
}

function queryDeleteById(idEvaluation){
    return(`DELETE from evaluation where id_emetteur=${idEvaluation}`);
}

module.exports = {
    queryCreate,
    querySelectAll,
    querySelectId,
    queryUpdateById,
    queryDeleteById
};
