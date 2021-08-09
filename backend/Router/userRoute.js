import express from "express";
import { validationSchema, validaton } from "../Middleware/validation.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("Server run");
});

router.post("/", validaton(validationSchema), (req, res) => {
  res.status(200).json(req.body);
});

export default router;
