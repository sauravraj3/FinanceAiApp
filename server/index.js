import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import { kpis, products } from "./data/data.js";
import Product from "./models/Product.js";
import productRoutes from "./routes/product.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES

app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);

const PORT = process.env.PORT || 9001; // Changed port number
const MONGO_URI =
  "mongodb+srv://sauravraj3sinha:Sinha123@financeaiapp.vdovoo3.mongodb.net/?retryWrites=true&w=majority&appName=FinanceAIApp"; // Ensure this is correctly set

if (!MONGO_URI) {
  console.error("MONGO_URI is not defined in the environment variables");
  process.exit(1); // Exit the application if MONGO_URI is not set
}

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

    // Add data one time or as needed
    // await mongoose.connection.db.dropDatabase();
    // Product.insertMany(products);
    // KPI.insertMany(kpis);

  })
  .catch((error) =>
    console.error(`Error connecting to MongoDB: ${error.message}`)
  );
