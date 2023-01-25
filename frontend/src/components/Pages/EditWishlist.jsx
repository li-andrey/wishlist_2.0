import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../../redux/slices/wishlistSlice";
import {
  getAllWishlistItems,
  addWishlistItem,
  editWishlistItem,
  deleteWishlistItem,
} from "../../redux/slices/wishlistItemSlice";

// Страница определенного Wishlist
const EditWishlist = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user._id);
  const { wishlistItems } = useSelector((state) => state.wishlistItems);
  const { wishlistId } = useParams();

  const [picture, setPicture] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [desireDegree, setDesireDegree] = React.useState("");
  const [wishlistItemId, setWishlistItemId] = React.useState("");
  const [owner, setOwner] = React.useState([]);
  const [isYourWishlist, setIsYourWishlist] = React.useState(false);

  console.log("isYourWishlist", isYourWishlist);

  // Получение wishlist, определение его владельца и выяснение свой или чужой wishlist
  React.useEffect(() => {
    const findWishlist = async () => {
      const { payload } = await dispatch(getWishlist(wishlistId));
      setOwner(payload.owner);
      if (userId === payload.owner._id) {
        setIsYourWishlist(true);
      }
    };
    findWishlist();
  }, [wishlistId]);

  // Получение списка всех wishlistItems
  React.useEffect(() => {
    dispatch(getAllWishlistItems(wishlistId));
  }, [wishlistId]);

  // Очистить inputs
  const resetInputs = async () => {
    setTitle("");
    setComment("");
    setDesireDegree("");
    setPicture("");
    setWishlistItemId("");
  };

  // Отправление DELETE запроса на сервер для СОХРАНЕНИЯ или РЕДАКТИРОВАНИЯ WishlistItem
  const handleSaveWishlistItem = async () => {
    if (!wishlistItemId) {
      // Create
      dispatch(
        addWishlistItem({ wishlistId, picture, title, comment, desireDegree })
      );
    } else {
      // Update
      dispatch(
        editWishlistItem({
          wishlistId,
          itemId: wishlistItemId,
          picture,
          title,
          comment,
          desireDegree,
        })
      );
    }
    resetInputs();
  };

  // Включение режима редактирования
  const handleClickEdit = (wishlistItem) => () => {
    setWishlistItemId(wishlistItem._id);
    setTitle(wishlistItem.title);
    setComment(wishlistItem.comment);
    setDesireDegree(wishlistItem.desireDegree);
    setPicture(wishlistItem.picture);
  };

  // Отправление DELETE запроса на сервер для УДАЛЕНИЯ WishlistItem
  const handleClickDelete = (wishlistItem) => async () => {
    dispatch(deleteWishlistItem({ wishlistItem, wishlistId }));
    resetInputs();
  };

  // Отправление запроса на сервер для БРОНИРОВАНИЯ WishlistItem
  const handleClickAssignee = (wishlistItem) => () => {
    dispatch(
      editWishlistItem({
        wishlistId,
        itemId: wishlistItem._id,
        picture: wishlistItem.picture,
        title: wishlistItem.title,
        comment: wishlistItem.comment,
        desireDegree: wishlistItem.desireDegree,
        assigneeId: userId,
      })
    );
    resetInputs();
  };

  return (
    <>
      <h2 className="main_h1">Список желаний -- {owner.name}</h2>
      <div className="table-container">
        <table width="100%">
          <tbody>
            <tr>
              <th width="250px">Изображение</th>
              <th width="400px">Название</th>
              <th width="400px">Комментарий</th>
              <th className="tb-middle" width="200px">
                Рейтинг
              </th>
              <th className="tb-middle" width="200px">
                Бронь
              </th>
            </tr>
            <tr>
              {isYourWishlist && (
                <div>
                  <td>
                    <input
                      className="inputItem1"
                      placeholder="Здесь нужно указать адрес картинки желаемого подарка в интернете"
                      onChange={(e) => setPicture(e.target.value)}
                      value={picture}
                    />
                  </td>
                  <td>
                    <input
                      className="inputItem2"
                      placeholder="Например: Iphone 12 PRO на 128 GB в синем цвете"
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                    />
                  </td>
                  <td>
                    <input
                      className="inputItem3"
                      placeholder="Расскажите о каких-то особенностях продукта, сфере его применения или любую другую информацию, которая поможет выбрать правильный подарок"
                      onChange={(e) => setComment(e.target.value)}
                      value={comment}
                    />
                  </td>
                  <td>
                    <div>
                      <div
                        className="rating-area"
                        onChange={(e) => setDesireDegree(e.target.value)}
                      >
                        <input
                          type="radio"
                          id="star-5"
                          name="rating"
                          value="5"
                          checked={desireDegree === "5"}
                          readOnly
                        />
                        <label htmlFor="star-5" title="Оценка «5»" />
                        <input
                          type="radio"
                          id="star-4"
                          name="rating"
                          value="4"
                          checked={desireDegree === "4"}
                          readOnly
                        />
                        <label htmlFor="star-4" title="Оценка «4»" />
                        <input
                          type="radio"
                          id="star-3"
                          name="rating"
                          value="3"
                          checked={desireDegree === "3"}
                          readOnly
                        />
                        <label htmlFor="star-3" title="Оценка «3»" />
                        <input
                          type="radio"
                          id="star-2"
                          name="rating"
                          value="2"
                          checked={desireDegree === "2"}
                          readOnly
                        />
                        <label htmlFor="star-2" title="Оценка «2»" />
                        <input
                          type="radio"
                          id="star-1"
                          name="rating"
                          value="1"
                          checked={desireDegree === "1"}
                          readOnly
                        />
                        <label htmlFor="star-1" title="Оценка «1»" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <input className="tb-booking" type="checkbox" disabled />
                  </td>

                  <td>
                    <button
                      className="btn-edit"
                      onClick={handleSaveWishlistItem}
                    >
                      Сохранить
                    </button>
                  </td>
                  <td>
                    <input
                      className="inputWishlistItemID"
                      disabled={true}
                      onChange={(e) => setWishlistItemId(e.target.value)}
                      value={wishlistItemId}
                    />
                  </td>
                </div>
              )}
            </tr>
            {wishlistItems.map((el) => {
              const isAssignee = !!el.assigneeId;
              return (
                <tr key={el._id}>
                  <td>
                    <div style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}>
                      <img className="tb-img" alt="Желание" src={el.picture} />
                    </div>
                  </td>
                  <td>
                    <div style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}>
                      {el.title}
                    </div>
                  </td>
                  <td>
                    <div style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}>
                      {el.comment}
                    </div>
                  </td>
                  <td>
                    <div
                      className="tb-middle"
                      style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}
                    >
                      {el.desireDegree}
                    </div>
                  </td>
                  <td>
                    <div style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}>
                      <input
                        className="tb-booking"
                        type="checkbox"
                        id="assignee"
                        name="assignee"
                        onClick={handleClickAssignee(el)}
                        checked={isAssignee}
                        disabled={isAssignee}
                      />
                    </div>
                  </td>
                  {isYourWishlist && (
                    <div>
                      <td>
                        <div
                          style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}
                        >
                          <button
                            className="btn-edit"
                            onClick={handleClickEdit(el)}
                          >
                            Редактировать
                          </button>
                        </div>
                      </td>
                      <td>
                        <div
                          style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}
                        >
                          <button
                            className="btn-edit"
                            onClick={handleClickDelete(el)}
                          >
                            Удалить
                          </button>
                        </div>
                      </td>
                    </div>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default EditWishlist;
