import express from "express";
import * as form from "../Controller/signupform.js";
const router = express.Router();

router.route('/')
            .get(form.get);

export default router;