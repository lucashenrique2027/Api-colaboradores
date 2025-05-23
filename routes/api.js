import express from "express";
import ColaboradoresApiController from "../app/Controllers/ColaboradoresApiController.js";

const router = express.Router();

router.get("/colaboradores", ColaboradoresApiController.list);
router.get("/colaboradores/:id", ColaboradoresApiController.get);
router.post("/colaboradores", ColaboradoresApiController.insert);

export default router;