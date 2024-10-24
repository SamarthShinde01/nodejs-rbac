import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
	let token;
	let authHeader = req.headers.Authorization || req.headers.authorization;

	if (authHeader && authHeader.startsWith("Bearer")) {
		token = authHeader.split(" ")[1];
	}

	if (token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			req.user = decoded;
			console.log(req.user);
			next();
		} catch (error) {
			return res.status(400).json({ message: "Token is not valid" });
		}
	} else {
		return res.status(400).json({ message: "No token, Not authorized" });
	}
};

export default verifyToken;
