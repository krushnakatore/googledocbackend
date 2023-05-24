import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("connected to mongoDb");
  } catch (err) {
    console.log("Error in connecting to db", err);
  }
};

export default connectDB;
