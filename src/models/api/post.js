import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  permalink: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => new Date().getTime(),
  },
  body: {
    type: String,
    required: true,
    default: "<p>Post</p>",
  },
  updatedAt: {
    type: Date,
    default: () => new Date().getTime(),
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    required: true,
    default:
      "https://res.cloudinary.com/geergregrgege/image/upload/v1717121409/assets/images/o3ysc2cvrovlldazfpap.jpg",
  },
  summary: {
    type: String,
    required: true,
    default: "No summary...",
  },
});

const model = mongoose.models.Post || mongoose.model("Post", schema);

export default model;
