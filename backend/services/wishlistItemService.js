const WishlistItem = require("../models/WishlistItem");
const ApiError = require("../exceptions/api-error");

class WishlistService {
  async getAllItems(_req, res) {
    const wishlistItems = await WishlistItem.find({});
    if (!wishlistItems) {
      throw ApiError.ServerError("Не удается найти товары в БД");
    }
    res.json(wishlistItems);
  }

  async getAllwishlistItems(wishlistId) {
    const wishlistItems = await WishlistItem.find({ wishList: wishlistId });
    if (!wishlistItems) {
      throw ApiError.BadRequest("Wishlist не найден");
    }
    return wishlistItems;
  }

  async addWishlistItem({ picture, title, comment, desireDegree, wishlist }) {
    const wishlistItem = new WishlistItem({
      picture,
      title,
      comment,
      desireDegree,
      wishlist,
    });
    const savedWishlistItem = await wishlistItem.save();
    if (!savedWishlistItem) {
      throw ApiError.BadRequest("Не удается добавить товар");
    }
    return savedWishlistItem;
  }

  async editWishlistItem(id, { title, comment, desireDegree, picture }) {
    const result = await WishlistItem.update(
      { _id: id },
      { title, comment, desireDegree, picture }
    );
    if (!result) {
      throw ApiError.BadRequest("Не удается изменить товар");
    }
    return result;
  }

  async setAssignee(id, { title, comment, desireDegree, picture, assigneeId }) {
    const result = await WishlistItem.update(
      { _id: id },
      { title, comment, desireDegree, picture, assigneeId }
    );
    if (!result) {
      throw ApiError.BadRequest("Не удается забронировать товар");
    }
    return result;
  }

  async deleteWishlistItem(id) {
    const result = await WishlistItem.deleteOne({ _id: id });
    if (!result) {
      throw ApiError.BadRequest("Не удается удалить товар");
    }
    return result;
  }
}

module.exports = new WishlistService();
