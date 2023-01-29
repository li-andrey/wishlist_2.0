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
import SkeletonCard from "../UI/CardItem/SkeletonCard";
import CreateItemForm from "../CreateItemForm/CreateItemForm";
import Button from "../UI/Button/Button";
import SortPopup from "../UI/SortPopup/SortPopup";

// Страница определенного Wishlist
const WishlistItemsTable = ({ wishlistId, userId, isYourWishlist }) => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlistItems);
  const { isLoading } = useSelector((state) => state.wishlistItems);
  const { sortValue } = useSelector((state) => state.filter);

  const [wishlistItem, setWishlistItem] = useState({
    picture: "",
    title: "",
    comment: "",
    desireDegree: "",
  });
  const [openEdit, setOpenEdit] = useState(false);

  //   console.log("isYourWishlist", isYourWishlist);

  // Получение списка всех wishlistItems
  useEffect(() => {
    dispatch(getAllWishlistItems({ wishlistId, sortValue }));
  }, [wishlistId, sortValue]);

  useEffect(() => {
    if (!openEdit) {
      setWishlistItem({
        picture: "",
        title: "",
        comment: "",
        desireDegree: "",
      });
    }
  }, [openEdit]);

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
    setOpenEdit(false);
    setWishlistItem({ picture: "", title: "", comment: "", desireDegree: "" });
  };

  // Включение режима редактирования
  const handleClickEdit = (wishlistItem) => () => {
    setWishlistItem({
      ...wishlistItem,
    });
    setOpenEdit(true);
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
    <div className={styles.wishlistWrapper}>
      {isYourWishlist && (
        <div className={styles.btnWrapper}>
          <Button onClick={() => setOpenEdit(true)}>Добавить товар</Button>
        </div>
      )}
      <SortPopup sortValue={sortValue} />

      <CreateItemForm
        wishlistItem={wishlistItem}
        setWishlistItem={setWishlistItem}
        active={isYourWishlist && openEdit}
        handleSaveWishlistItem={handleSaveWishlistItem}
        setOpenEdit={setOpenEdit}
      />

      <div className={styles.itemsList}>
        {wishlistItems.map((el) => {
          return isLoading ? (
            <div className={styles.skeletonWrapper} key={el._id}>
              <SkeletonCard />
            </div>
          ) : (
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
        {/* {isLoading
          ? wishlistItems.map((el) => {
              return (
                <div className={styles.skeletonWrapper} key={el._id}>
                  <SkeletonCard />
                </div>
              );
            })
          : wishlistItems.map((el) => {
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
            })} */}
      </div>
    </div>
  );
};

export default WishlistItemsTable;
