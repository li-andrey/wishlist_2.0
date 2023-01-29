import myAxios from "../utils/axios";

// Получение всех товаров
const getAllItems = async () => {
  const { data } = await myAxios.get(`/wishlist_items`);
  return data;
};

// Получение всех товаров в конкретном wishlist
const getAllWishlistItems = async (params) => {
  const { wishlistId, sortValue } = params;
  const { data } = await myAxios.get(
    `/wishlists/${wishlistId}/wishlist_items&sortBy=${sortValue.property}`
  );
  return data;
};

// Создание нового товара в wishlist
const addWishlistItem = async (params) => {
  const { wishlistId, wishlistItem } = params;
  const { data } = await myAxios.post(
    `/wishlists/${wishlistId}/wishlist_items`,
    { wishlistItem }
  );
  return data;
};

// Редактирование товара в wishlist
const editWishlistItem = async (params) => {
  const { wishlistId, wishlistItem, assigneeId } = params;
  const { data } = await myAxios.patch(
    `/wishlists/${wishlistId}/wishlist_items/${wishlistItem._id}`,
    { wishlistItem, assigneeId }
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
