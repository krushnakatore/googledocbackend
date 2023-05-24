import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("document", documentSchema);
