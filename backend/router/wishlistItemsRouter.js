const Router = require("express").Router;
const {
  getAllItems,
  getAllWishlistItems,
  addWishlistItem,
  editWishlistItem,
  setAssignee,
  deleteWishlistItem,
} = require("../controllers/wishlistItemsController");

const router = new Router();

router.get("/wishlist_items", getAllItems);
router.get("/wishlists/:wish_list_id/wishlist_item", getAllWishlistItems);
router.post("/wishlists/:wish_list_id/wishlist_item", addWishlistItem);
router.patch("/wishlists/:wish_list_id/wishlist_item/:id", editWishlistItem);
router.patch(
  "/wishlists/:wish_list_id/wishlist_item/:id/set_assignee",
  setAssignee
);
router.delete("/wishlists/:wish_list_id/wishlist_item/:id", deleteWishlistItem);

module.exports = router;
