import express from "express";
import router from "./Router/userRoute.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", router);
app.listen(5000, () => {
  console.log(`http://localhost:5000`);
});
