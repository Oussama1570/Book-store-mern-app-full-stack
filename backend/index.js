const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5000;

// Define allowed origins
const allowedOrigins = [
  "http://localhost:5173", // Local development
  "https://book-app-frontend-six-dun.vercel.app/", // Deployed frontend
];

// Enable CORS with allowed origins and credentials support
app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin is in the allowed list or is undefined (for localhost)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET, POST, PUT, DELETE", // Allowed methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

// Enable JSON parsing
app.use(express.json());

// Routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// MongoDB Connection
async function main() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

main();

// Default route
app.get("/", (req, res) => {
  res.send("Book Store Server is running!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
