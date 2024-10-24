import express from "express";
const router = express.Router();

//only admin can access this router
router.get("/admin", (req, res) => {
	res.json({ message: "Welcome admin" });
});

//only manager can access this router
router.get("/manager", (req, res) => {
	res.json({ message: "Welcome manager" });
});

//only user can access this router
router.get("/user", (req, res) => {
	res.json({ message: "Welcome user" });
});

export default router;
