import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import ProductRoutes from "./routes/product_route.js";
import path from "path";

dotenv.config();

const __dirname = path.resolve();
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/products", ProductRoutes);



if (process.env.NODE_ENV === "production") {
    // ERROR 5: Invalid character in static path
    // Remove ? from path
    app.use(express.static(path.join(__dirname, "frontend/dist")))
    app.get("*",(req,res)=>
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")))
}

app.listen(PORT, () => {
    connectDB();

    console.log("Server is at http://localhost:5000")
});