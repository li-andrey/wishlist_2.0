const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wishlist", wishlistSchema);
