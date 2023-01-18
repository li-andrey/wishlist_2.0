import myAxios from "../utils/axios";

// GET all Wishlist
const getAllWishlists = async () => {
  const response = await myAxios.get(`/wishlists`);
  return response;
};

// GET Wishlist
const getWishlist = async (wishlistId) => {
  const response = await myAxios.get(`/wishlists/${wishlistId}`);
  return response;
};

// Create new Wishlist
const createWishlist = async (userId) => {
  const response = await myAxios.post("/wishlists", { userId });
  return response;
};

export default { getWishlist, getAllWishlists, createWishlist };
