const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: { type: String },
    content: { type: String },
    author: { type: String },
    upvote: { type: Array, default: [] },
    downvote: { type: Array, default: [] },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
