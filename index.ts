import express from "express";
import 'dotenv/config';
import productRouter from "./routes/product.router";

const app = express();
app.use(express.json());
app.use(productRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});