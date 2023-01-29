import myAxios from "../utils/axios";

// GET all Wishlist
const getAllWishlists = async () => {
  const { data } = await myAxios.get(`/wishlists`);
  return data;
};

// GET Wishlist
const getWishlist = async (wishlistId) => {
  const { data } = await myAxios.get(`/wishlists/${wishlistId}`);
  return data;
};

// Create new Wishlist
const createWishlist = async (userId) => {
  const { data } = await myAxios.post("/wishlists", { userId });
  return data;
};

export default { getWishlist, getAllWishlists, createWishlist };
