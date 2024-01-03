import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
dotenv.config();
import products from "./data/products.js";
import connectDB from "./config/db.js";
const app = express();

app.use(express.json());

connectDB();

//what is middleware: code that can run inbetween ther equest response cycles - use next to ensure cycle continues
//Example Middleware:
/*
app.use((req, res, next) => {
  console.log("this is middleware talking".yellow.bold);
  console.log(`${req.originalUrl}`.magenta.bold);
  next();
});
*/

app.get("/", (req, res) => {
  res.send("API is working");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log("server listening on port 3100");
});
