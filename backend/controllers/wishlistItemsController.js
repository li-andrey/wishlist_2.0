const WishlistItem = require("../models/WishlistItem");

class WishlistItemsController {
  // Получение списка всех WishlistItem
  async getAllItems(_req, res) {
    const wishlistItems = await WishlistItem.find({});
    res.json(wishlistItems);
  }

  // Получение списка всех WishlistItem определенного Wishlist
  async getAllWishlistItems(req, res) {
    const wishlistId = req.params.wish_list_id;
    const wishlistItems = await WishlistItem.find({ wishList: wishlistId });
    res.json(wishlistItems);
  }

  //  Добавление нового WishlistItem
  async addWishlistItem(req, res) {
    const body = req.body;
    const wishlistItem = new WishlistItem({
      picture: body.picture,
      title: body.title,
      comment: body.comment,
      desireDegree: body.desireDegree,
      wishList: req.params.wish_list_id,
    });
    const savedWishlistItem = await wishlistItem.save();
    res.json(savedWishlistItem);
  }

  // Редактирование WishlistItem
  async editWishlistItem(req, res) {
    const id = req.params.id;
    const { picture, title, comment, desireDegree } = req.body;
    const result = await WishlistItem.update(
      { _id: id },
      { title, comment, desireDegree, picture }
    );
    res.send(result);
  }

  // Редактирование WishlistItem назначение Assignee
  async setAssignee(req, res) {
    const id = req.params.id;
    const { picture, title, comment, desireDegree, assigneeId } = req.body;
    const result = await WishlistItem.update(
      { _id: id },
      { title, comment, desireDegree, picture, assigneeId }
    );
    res.send(result);
  }

  // Удаление WishlistItem
  async deleteWishlistItem(req, res) {
    const id = req.params.id;
    const result = await WishlistItem.deleteOne({ _id: id });
    res.send(result);
  }
}

module.exports = new WishlistItemsController();
