const Router = require("express").Router;
const wishlistController = require("../controllers/wishlistsController");

const router = new Router();

router.get("/", wishlistController.getAllWishlists);
router.get("/:wish_list_id", wishlistController.getWishlist);
router.post("/", wishlistController.createWishlist);

module.exports = router;
