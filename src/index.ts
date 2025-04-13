import express from "express";
import { connectDatabase } from "./database";
import cartRoutes from "./routes/cartRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", cartRoutes);

connectDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => console.log("Database connection error: ", error));