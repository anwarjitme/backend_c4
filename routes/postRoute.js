const express = require("express");
const { PostModel } = require("../models/postModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const postRoute = express.Router();

postRoute.get("/", async (req, res) => {
  const device = req.query;
  try {
    const posts = await PostModel.find()
res.send(posts);
  } catch (er) {
    console.log(er);
    res.send("error in get post");
  }
});

postRoute.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const new_post = new PostModel(payload);
    await new_post.save();
    res.send("post added");
  } catch (er) {
    console.log(er);
    res.send("error in adding post");
  }
}
);




module.exports = {
  postRoute,
};
