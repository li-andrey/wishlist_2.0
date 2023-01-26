import styles from "./WishlistItemsTable.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllWishlistItems,
  addWishlistItem,
  editWishlistItem,
  deleteWishlistItem,
} from "../../redux/slices/wishlistItemSlice";
import CardItem from "../UI/CardItem/CardItem";
import CreateItemForm from "../CreateItemForm/CreateItemForm";

// Страница определенного Wishlist
const WishlistItemsTable = ({ wishlistId, userId, isYourWishlist }) => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlistItems);

  const [wishlistItem, setWishlistItem] = useState({
    picture: "",
    title: "",
    comment: "",
    desireDegree: "",
  });

  //   console.log("isYourWishlist", isYourWishlist);

  // Получение списка всех wishlistItems
  useEffect(() => {
    dispatch(getAllWishlistItems(wishlistId));
  }, [wishlistId]);

  // Отправление DELETE запроса на сервер для СОХРАНЕНИЯ или РЕДАКТИРОВАНИЯ WishlistItem
  const handleSaveWishlistItem = async () => {
    if (!wishlistItem._id) {
      // Create
      dispatch(addWishlistItem({ wishlistId, wishlistItem }));
    } else {
      // Update

      dispatch(
        editWishlistItem({
          wishlistId,
          wishlistItem,
        })
      );
    }
    setWishlistItem({ picture: "", title: "", comment: "", desireDegree: "" });
  };

  // Включение режима редактирования
  const handleClickEdit = (wishlistItem) => () => {
    setWishlistItem({
      ...wishlistItem,
    });
  };

  // Отправление DELETE запроса на сервер для УДАЛЕНИЯ WishlistItem
  const handleClickDelete = (wishlistItem) => async () => {
    dispatch(deleteWishlistItem({ wishlistItem, wishlistId }));
  };

  // Отправление запроса на сервер для БРОНИРОВАНИЯ WishlistItem
  const handleClickAssignee = (wishlistItem) => () => {
    dispatch(
      editWishlistItem({
        wishlistId,
        wishlistItem,
        assigneeId: userId,
      })
    );
  };

  return (
    <div className="">
      <CreateItemForm
        wishlistItem={wishlistItem}
        setWishlistItem={setWishlistItem}
        active={isYourWishlist}
        handleSaveWishlistItem={handleSaveWishlistItem}
      />

      <div className={styles.items_table}>
        {wishlistItems.map((el) => {
          return (
            <CardItem
              key={el._id}
              item={el}
              handleClickAssignee={handleClickAssignee}
              isAssignee={el.assigneeId}
              isYourWishlist={isYourWishlist}
              handleClickEdit={handleClickEdit}
              handleClickDelete={handleClickDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WishlistItemsTable;
