import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoutes.js";

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
	return res.json("server is running...");
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
