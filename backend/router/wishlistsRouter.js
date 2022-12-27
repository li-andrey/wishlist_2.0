const Router = require("express").Router;
const {
  getAllWishlists,
  getWishlist,
  createWishlist,
} = require("../controllers/wishlistsController");

const router = new Router();

router.get("/", getAllWishlists);
router.get("/:wish_list_id", getWishlist);
router.post("/", createWishlist);

module.exports = router;
