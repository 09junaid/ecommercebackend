import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import catagoryRoute from "./routes/catagoryRoutes.js";
import productRoute from "./routes/productRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import contactRoute from "./routes/contactRoute.js";
import orderRoute from "./routes/orderRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";
// import serverless from "serverless-http"; // 🔥 New

dotenv.config();
const app = express();

// @ middleware
app.use(cors({
  origin:"https://hypehive.vercel.app",
  credentials: true,
}));
app.use(bodyParser.json());
app.use(express.json());

// @ routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", catagoryRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/contact", contactRoute);

app.get("/", (req, res) => {
  res.send({
    message:"Welcome to HypeHive",
    activeStatus: true,
    error: false,
  });
});
connectDB();
export default app;
