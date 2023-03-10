const WishlistItem = require("../models/WishlistItem");
const ApiError = require("../exceptions/api-error");

class WishlistService {
  async getAllItems(_req, res) {
    const wishlistItems = await WishlistItem.find({});

    if (!wishlistItems) {
      throw ApiError.ServerError("Не удается найти товары в БД");
    }
    return wishlistItems;
  }

  async getAllwishlistItems({ wishlistId, sortValue }) {
    let wishlistItems = [];
    switch (sortValue) {
      case "titleDesc":
        wishlistItems = await WishlistItem.find({
          wishList: wishlistId,
        }).sort({ title: "desc" });
        break;

      case "titleAsc":
        wishlistItems = await WishlistItem.find({
          wishList: wishlistId,
        }).sort({ title: "asc" });
        break;

      case "desireDesc":
        wishlistItems = await WishlistItem.find({
          wishList: wishlistId,
        }).sort({ desireDegree: "desc" });
        break;

      case "desireAsc":
        wishlistItems = await WishlistItem.find({
          wishList: wishlistId,
        }).sort({ desireDegree: "asc" });
        break;
      default:
        break;
    }
    if (!wishlistItems) {
      throw ApiError.BadRequest("Wishlist не найден");
    }
    return wishlistItems;
  }

  async addWishlistItem({ data, wishlist }) {
    const wishlistItem = new WishlistItem({
      picture: data.wishlistItem.picture,
      title: data.wishlistItem.title,
      comment: data.wishlistItem.comment,
      desireDegree: data.wishlistItem.desireDegree,
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
          title: body.wishlistItem.title,
          comment: body.wishlistItem.comment,
          desireDegree: body.wishlistItem.desireDegree,
          picture: body.wishlistItem.picture,
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
