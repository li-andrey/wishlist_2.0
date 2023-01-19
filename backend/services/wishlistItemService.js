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

  async addWishlistItem({ data, wishlist }) {
    const wishlistItem = new WishlistItem({
      picture: data.picture,
      title: data.title,
      comment: data.comment,
      desireDegree: data.desireDegree,
      wishList: wishlist,
    });
    const savedWishlistItem = await wishlistItem.save();
    if (!savedWishlistItem) {
      throw ApiError.BadRequest("Не удается добавить товар");
    }
    return savedWishlistItem;
  }

  async editWishlistItem(id, body) {
    const result = await WishlistItem.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title: body.title,
          comment: body.comment,
          desireDegree: body.desireDegree,
          picture: body.picture,
          assigneeId: body.assigneeId,
        },
      },
      { new: true }
    );
    if (!result) {
      throw ApiError.BadRequest("Не удается изменить товар");
    }
    return result;
  }

  async deleteWishlistItem(id) {
    const result = await WishlistItem.deleteOne({ _id: id });
    if (!result) {
      throw ApiError.BadRequest("Не удается удалить товар");
    }
    return id;
  }
}

module.exports = new WishlistService();
