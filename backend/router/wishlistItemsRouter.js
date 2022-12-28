const Router = require("express").Router;
const wishlistItemsController = require("../controllers/wishlistItemsController");

const router = new Router();

router.get("/wishlist_items", wishlistItemsController.getAllItems);
router.get(
  "/wishlists/:wish_list_id/wishlist_item",
  wishlistItemsController.getAllWishlistItems
);
router.post(
  "/wishlists/:wish_list_id/wishlist_item",
  wishlistItemsController.addWishlistItem
);
router.patch(
  "/wishlists/:wish_list_id/wishlist_item/:id",
  wishlistItemsController.editWishlistItem
);
router.patch(
  "/wishlists/:wish_list_id/wishlist_item/:id/set_assignee",
  wishlistItemsController.setAssignee
);
router.delete(
  "/wishlists/:wish_list_id/wishlist_item/:id",
  wishlistItemsController.deleteWishlistItem
);

module.exports = router;
