import myAxios from "../utils/axios";

// Получение всех товаров
const getAllItems = async () => {
  const response = await myAxios.get(`/wishlist_items`);
  return response;
};

// Получение всех товаров в конкретном wishlist
const getAllWishlistItems = async (wishlistId) => {
  const response = await myAxios.get(`/wishlists/${wishlistId}/wishlist_items`);
  return response;
};

// Создание нового товара в wishlist
const addWishlistItem = async (params) => {
  const response = await myAxios.post(
    `/wishlists/${params.wishlistId}/wishlist_items`,
    { params }
  );
  return response;
};

// Редактирование товара в wishlist
const editWishlistItem = async ({ params }) => {
  const response = await myAxios.post(
    `/wishlists/${params.wishlistId}/wishlist_items/${params.wishListItemId}`,
    { params }
  );
  return response;
};

// Редактирование товара в wishlist
const deleteWishlistItem = async (params) => {
  const response = await myAxios.post(
    `/wishlists/${params.wishlistId}/wishlist_items/${params.wishListItemId}`
  );
  return response;
};

export default {
  getAllItems,
  getAllWishlistItems,
  addWishlistItem,
  editWishlistItem,
  deleteWishlistItem,
};
