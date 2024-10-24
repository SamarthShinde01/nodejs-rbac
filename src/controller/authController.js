import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

const register = async (req, res) => {
	try {
		const { username, password, role } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = await User({ username, password: hashedPassword, role });
		await newUser.save();

		return res
			.status(200)
			.json({ message: "User registerd succesfully", newUser });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: error.message });
	}
};

const login = async (req, res) => {
	try {
		const { username, password } = req.body;

		const user = await User.findOne({ username });
		if (!user) {
			return res.status(400).json({ message: "User not found" });
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({ message: "Invalid Credentials" });
		}

		const token = jwt.sign(
			{ userId: user._id, role: user.role },
			process.env.JWT_SECRET,
			{ expiresIn: "2hr" }
		);

		return res.status(200).json({ token });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: error.message });
	}
};

export { register, login };
