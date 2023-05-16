import express from "express";
import borrarDatabase from "../db/dropdatabase";

const router = express.Router();

router.get("/", () => {
    borrarDatabase;
    console.log("Base de datos eliminada")
});

export default router;