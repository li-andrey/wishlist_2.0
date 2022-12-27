const Wishlist = require("../models/Wishlist");

// Список всех Wishlists
const getAllWishlists = async (_req, res) => {
  const wishlists = await Wishlist.find({}).populate("owner");
  res.json(wishlists);
};

// Получение одного Wishlist
const getWishlist = async (req, res) => {
  const wishlistId = req.params.wish_list_id;
  const wishlist = await Wishlist.findOne({ _id: wishlistId }).populate(
    "owner"
  );
  res.json(wishlist);
};

// Создание нового Wishlist
const createWishlist = async (req, res) => {
  const curentUserId = req.body.userId;
  const wishlist = new Wishlist({
    owner: curentUserId,
  });
  const savedWishlist = await wishlist.save();
  res.json(savedWishlist);
};

module.exports = { getAllWishlists, getWishlist, createWishlist };
