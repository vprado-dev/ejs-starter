import { Router } from "express";
import { index } from "../endpoints";

const router = Router();

router.get("/", index);

export default router;
