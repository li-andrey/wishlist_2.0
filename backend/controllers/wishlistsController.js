const wishlistService = require("../services/wishlistService");

class WishlistController {
  // Список всех Wishlists
  async getAllWishlists(_req, res, next) {
    try {
      const wishlists = await wishlistService.getAllWishlists();
      res.json(wishlists);
    } catch (err) {
      next(err);
    }
  }

  // Получение одного Wishlist
  async getWishlist(req, res, next) {
    try {
      const wishlistId = req.params.wish_list_id;
      const wishlist = await wishlistService.getWishlist(wishlistId);
      res.json(wishlist);
    } catch (err) {
      next(err);
    }
  }

  // Создание нового Wishlist
  async createWishlist(req, res, next) {
    try {
      const curentUserId = req.body.userId;
      const newWishlist = await wishlistService.createWishlist(curentUserId);
      res.json(newWishlist);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new WishlistController();
