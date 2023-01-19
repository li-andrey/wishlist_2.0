const wishlistItemService = require("../services/wishlistItemService");

class WishlistItemsController {
  // Получение списка всех WishlistItem
  async getAllItems(_req, res, next) {
    try {
      const wishlistItems = await wishlistItemService.getAllItems();
      res.json(wishlistItems);
    } catch (error) {
      next(error);
    }
  }

  // Получение списка всех WishlistItem определенного Wishlist
  async getAllWishlistItems(req, res, next) {
    try {
      const wishlistId = req.params.wish_list_id;
      const wishlistItems = await wishlistItemService.getAllwishlistItems(
        wishlistId
      );
      res.json(wishlistItems);
    } catch (error) {
      next(error);
    }
  }

  //  Добавление нового WishlistItem
  async addWishlistItem(req, res, next) {
    try {
      const data = req.body;
      const wishlist = req.params.wish_list_id;
      const wishlistItem = await wishlistItemService.addWishlistItem({
        data,
        wishlist,
      });
      res.json(wishlistItem);
    } catch (error) {
      next(error);
    }
  }

  // Редактирование WishlistItem
  async editWishlistItem(req, res, next) {
    try {
      const id = req.params.id;
      const body = req.body;
      const editedWishlistItem = await wishlistItemService.editWishlistItem(
        id,
        body
      );
      res.send(editedWishlistItem);
    } catch (error) {
      next(error);
    }
  }

  // Удаление WishlistItem
  async deleteWishlistItem(req, res, next) {
    try {
      const id = req.params.id;
      const result = await wishlistItemService.deleteWishlistItem(id);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new WishlistItemsController();
