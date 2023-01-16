// title ==> String
// body ==> String
// device ==> String

const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  title: String,
  body: String,
  device: String
});
const PostModel = mongoose.model("post_model", PostSchema);

module.exports = {
  PostModel,
};