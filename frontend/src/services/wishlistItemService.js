import myAxios from "../utils/axios";

// Получение всех товаров
const getAllItems = async () => {
  const response = await myAxios.get(`/wishlist_items`);
  return response;
};

// Получение всех товаров в конкретном wishlist
const getAllWishlistItems = async (wishlistId) => {
  const { data } = await myAxios.get(`/wishlists/${wishlistId}/wishlist_items`);
  return data;
};

// Создание нового товара в wishlist
const addWishlistItem = async (params) => {
  const { wishlistId, picture, title, comment, desireDegree } = params;
  const { data } = await myAxios.post(
    `/wishlists/${wishlistId}/wishlist_items`,
    { picture, title, comment, desireDegree }
  );
  return data;
};

// Редактирование товара в wishlist
const editWishlistItem = async (params) => {
  const {
    wishlistId,
    itemId,
    picture,
    title,
    comment,
    desireDegree,
    assigneeId,
  } = params;
  const { data } = await myAxios.patch(
    `/wishlists/${wishlistId}/wishlist_items/${itemId}`,
    { picture, title, comment, desireDegree, assigneeId }
  );
  return data;
};

// Редактирование товара в wishlist
const deleteWishlistItem = async (params) => {
  const { wishlistItem, wishlistId } = params;
  const { data } = await myAxios.delete(
    `/wishlists/${wishlistId}/wishlist_items/${wishlistItem._id}`
  );
  return data;
};

export default {
  getAllItems,
  getAllWishlistItems,
  addWishlistItem,
  editWishlistItem,
  deleteWishlistItem,
};
