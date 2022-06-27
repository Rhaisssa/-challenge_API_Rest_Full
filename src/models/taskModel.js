import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },

    description: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const tasks = mongoose.model("tasks", taskSchema);

export default tasks;
