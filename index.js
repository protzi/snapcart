import express from "express";
import { connectDatabase } from "./src/database";
import authRoutes from "./src/routes/auth";

const app = express();
app.use(express.json());

connectDatabase().then(() => {
    app.use("/auth", authRoutes);
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch(error => console.log("Database connection error: ", error));