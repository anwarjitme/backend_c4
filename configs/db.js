const mongoose=require("mongoose")

const connection = mongoose.connect(
  "mongodb+srv://anwarjitme:anwarjitme@cluster0.g0skr.mongodb.net/mediadb?retryWrites=true&w=majority"
);

module.exports={
    connection
}