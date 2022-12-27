const mongoose = require("mongoose");

const wishlistItemSchema = new mongoose.Schema(
  {
    picture: String,
    title: String,
    comment: String,
    desireDegree: Number,
    wishList: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wishlist",
    },
    assigneeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WishlistItem", wishlistItemSchema);
