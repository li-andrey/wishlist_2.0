const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: String,
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
