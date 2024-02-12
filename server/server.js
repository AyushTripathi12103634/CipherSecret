import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.listen(process.env.PORT,() => {
    console.log("Server listening on port ".bgGreen.black + process.env.PORT.bgGreen.black);
})