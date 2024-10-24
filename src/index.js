import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
connectDB();
app.get("/", (req, res) => {
	return res.json("server is running...");
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
