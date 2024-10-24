import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";
const router = express.Router();

//only admin can access this router
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
	res.json({ message: "Welcome admin" });
});

//only manager can access this router
router.get(
	"/manager",
	verifyToken,
	authorizeRoles("admin", "manager"),
	(req, res) => {
		res.json({ message: "Welcome manager" });
	}
);

//only user can access this router
router.get(
	"/user",
	verifyToken,
	authorizeRoles("admin", "manager", "user"),
	(req, res) => {
		res.json({ message: "Welcome user" });
	}
);

export default router;
