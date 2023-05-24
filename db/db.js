import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://krushnakatore:krushnakatore@kkclustor.ydc0v.mongodb.net/googledocs",
      { useUnifiedTopology: true, useNewUrlParser: true }
    );
    console.log("connected to mongoDb");
  } catch (err) {
    console.log("Error in connecting to db", err);
  }
};

export default connectDB;
