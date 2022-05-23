const express = require("express");

const {
  createBlog,
  getOneBlog,
  getAllBlog,
  upvote,
  downvote
} = require("../controllers/blog");

const blogRouter = express.Router();

blogRouter.post("/", createBlog); // http://localhost:5000/blog
blogRouter.get("/:id", getOneBlog); // http://localhost:5000/blog/:id
blogRouter.get("/", getAllBlog); // http://localhost:5000/blog
blogRouter.put("/:id/upvote", upvote); // http://localhost:5000/blog/:id/upvote
blogRouter.put("/:id/downvote", downvote); // http://localhost:5000/blog/:id/downvote

module.exports = blogRouter;
