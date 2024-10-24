import mongoose from "mongoose";

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DATABASE_URL);
		console.log("MONGO DB CONNECTED..");
	} catch (error) {
		console.error(error.message);
	}
};

export default connectDB;
