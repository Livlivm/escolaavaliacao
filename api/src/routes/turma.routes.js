const express = require("express");

const router = express.Router();

const {
    cadastrar,
    listar,
    buscar,
    excluir
} = require("../controllers/turma.controller");


router.post("/turma/cadastrar", cadastrar);
router.get("/turma/listar/:professorId", listar);
router.get("/turma/buscar/:id", buscar);
router.delete("/turma/excluir/:id", excluir);

module.exports = router;