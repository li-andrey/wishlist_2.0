const ApiError = require("../exceptions/api-error");
const Wishlist = require("../models/Wishlist");

class WishlistService {
  async getAllWishlists() {
    const wishlists = await Wishlist.find({}).populate("owner");
    if (!wishlists) {
      throw ApiError.ServerError("Не удается получить данные из БД");
    }
    return wishlists;
  }

  async getWishlist(wishlistId) {
    const wishlist = await Wishlist.findOne({ _id: wishlistId }).populate(
      "owner"
    );
    if (!wishlist) {
      throw ApiError.BadRequest("Wishlist не найден");
    }
    return wishlist;
  }

  async createWishlist(ownerId) {
    const newWishlist = new Wishlist({
      owner: ownerId,
    });
    const savedWishlist = await newWishlist.save();
    if (!savedWishlist) {
      throw ApiError.ServerError("Не удается сохранить wishlist в БД");
    }
    return savedWishlist;
  }
}

module.exports = new WishlistService();
