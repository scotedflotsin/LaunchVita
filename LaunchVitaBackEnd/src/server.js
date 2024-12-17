import express from "express";
import cors from "cors";
import morgan from "morgan"; // For logging HTTP requests
import dotenv from "dotenv"; // For environment variables
import helmet from "helmet"; // For securing HTTP headers

import aiAgent from "./routes/aiAgent.js";

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware setup
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
// Enable CORS for all routes or configure specific origins as needed
app.use(cors({
  origin: 'http://localhost:5173', // Allow only the frontend app's domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(helmet()); // Add secure HTTP headers
app.use(morgan("dev")); // Log HTTP requests (dev mode)

// Routes
app.use("/api", aiAgent); //To get ai genrated description

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    success: false,
  });
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
