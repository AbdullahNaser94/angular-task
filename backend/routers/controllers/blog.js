const blogScema = require("../../db/models/blog");

//blog create
const createBlog = async (req, res) => {
  try {
    //create new blog
    const newBlog = new blogScema({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      upvote: req.body.upvote,
      downvote: req.body.downvote,
      userId: req.body.userId
    });

    //save blog
    const blog = await newBlog.save();
    res.status(200).json({ message: "create blog", result: blog });
  } catch (err) {
    res.status(500).json(err);
  }
};

// get one blog
const getOneBlog = async (req, res) => {
  try {
    const blog = await blogScema.findById(req.params.id);
    res.status(200).json({ message: "get blog", result: blog });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllBlog = async (req, res) => {
  try {
    const blog = await blogScema.find({});
    res.status(200).json({ message: "get all blog", result: blog });
  } catch (err) {
    res.status(500).json(err);
  }
};

// upvote a blog
const upvote = async (req, res) => {
  try {
    const blog = await blogScema.findById(req.params.id);

    if (!blog.upvote.includes(req.body.userId)) {
      await blog.updateOne({ $push: { upvote: req.body.userId } });
      res.status(200).json("this Upvote");
    } else {
      await blog.updateOne({ $pull: { upvote: req.body.userId } });
      res.status(200).json("this disUpvote");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// downvote a blog
const downvote = async (req, res) => {
  try {
    const blog = await blogScema.findById(req.params.id);

    if (!blog.downvote.includes(req.body.userId)) {
      await blog.updateOne({ $push: { downvote: req.body.userId } });
      res.status(200).json("this downvote");
    } else {
      await blog.updateOne({ $pull: { downvote: req.body.userId } });
      res.status(200).json("this disDownvote");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createBlog, getOneBlog, getAllBlog, upvote, downvote };
