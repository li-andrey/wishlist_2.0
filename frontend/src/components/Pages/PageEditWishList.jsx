import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// PATCH редактирования WishList
/* async function patchWishList(wishListId) {
  // Default options are marked with *
  const data = {};
  const url = `/api/wishlists/${wishListId}`;
  const response = await fetch(url, {
    method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
 */
// POST добавление WishListItem
async function postNewWishListItem(
  wishListId,
  picture,
  title,
  comment,
  desireDegree
) {
  // Default options are marked with *
  const data = { picture, title, comment, desireDegree };
  const url = `http://localhost:3100/api/wishlists/${wishListId}/wishlist_item/`;
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// PATCH редактирование WishListItem
async function patchWishListItem(
  wishListId,
  wishListItemId,
  picture,
  title,
  comment,
  desireDegree
) {
  // Default options are marked with *
  const data = { picture, title, comment, desireDegree };
  const url = `http://localhost:3100/api/wishlists/${wishListId}/wishlist_item/${wishListItemId}`;
  const response = await fetch(url, {
    method: "PATCH", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// PATCH определение Assignee для WishListItem
async function patchWishListItemAssignee(
  wishListId,
  wishListItemId,
  picture,
  title,
  comment,
  desireDegree,
  assigneeId
) {
  // Default options are marked with *
  const data = { picture, title, comment, desireDegree, assigneeId };
  const url = `http://localhost:3100/api/wishlists/${wishListId}/wishlist_item/${wishListItemId}/set_assignee`;
  const response = await fetch(url, {
    method: "PATCH", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// DELETE удаление WishListItem
async function deleteWishListItem(wishListItemId, wishListId) {
  // Default options are marked with *
  const data = {};
  const url = `http://localhost:3100/api/wishlists/${wishListId}/wishlist_item/${wishListItemId}`;
  const response = await fetch(url, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// GET all WishListItem
async function getAllWishListItems(wishListId) {
  const url = `http://localhost:3100/api/wishlists/${wishListId}/wishlist_item`;
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// GET WishList
async function getWishList(wishListId) {
  const url = `http://localhost:3100/api/wishlists/${wishListId}`;
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// Редактирование WishList
export default function EditWishList() {
  const { wishListId } = useParams();
  // console.log('wishListId', wishListId);

  const [wishListItems, setWishListItems] = React.useState([]);
  // console.log('wishListItems', wishListItems);

  const [picture, setPicture] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [desireDegree, setDesireDegree] = React.useState("");
  const [wishListItemId, setWishListItemId] = React.useState("");
  const [assigneeId, setAssigneeId] = React.useState("");
  const [owner, setOwner] = React.useState([]);
  const auth = useContext(AuthContext);
  const userId = auth.userId;
  const [isYourAcc, setIsYourAcc] = React.useState(false);

  console.log(123, isYourAcc);

  React.useEffect(() => {
    const callGetWishList = async () => {
      const oneWishList = await getWishList(wishListId);
      console.log("oneWishList", oneWishList);
      setOwner(oneWishList.owner);
      if (userId === owner._id) {
        setIsYourAcc(true);
      }
    };
    callGetWishList();
  }, [wishListId]);

  React.useEffect(() => {
    const callGetAllWishListItems = async () => {
      const items = await getAllWishListItems(wishListId);
      setWishListItems(items);
    };
    callGetAllWishListItems();
  }, [wishListId]);

  // Добавление нового WishListItem
  const handlePicture = (event) => {
    setPicture(event.target.value);
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleComment = (event) => {
    setComment(event.target.value);
  };
  const handleDesireDegree = (event) => {
    setDesireDegree(event.target.value);
  };
  const handleChangeWishListItemId = (event) => {
    setWishListItemId(event.target.value);
  };

  const getItemsFromServer = async () => {
    const items = await getAllWishListItems(wishListId);
    setWishListItems(items);
    setTitle("");
    setComment("");
    setDesireDegree("");
    setPicture("");
    setWishListItemId("");
    setAssigneeId("");
  };

  // Сохранение WishListItem
  const handleSaveWishListItem = async () => {
    if (!wishListItemId) {
      // Create
      await postNewWishListItem(
        wishListId,
        picture,
        title,
        comment,
        desireDegree
      );
    } else {
      // Update
      await patchWishListItem(
        wishListId,
        wishListItemId,
        picture,
        title,
        comment,
        desireDegree,
        assigneeId
      );
    }
    await getItemsFromServer();
  };

  const handleClickEdit = (wishListItem) => () => {
    setWishListItemId(wishListItem._id);
    setTitle(wishListItem.title);
    setComment(wishListItem.comment);
    setDesireDegree(wishListItem.desireDegree);
    setPicture(wishListItem.picture);
  };

  // Отправление DELETE запроса на сервер для удаления WishListItem
  const handleClickDelete = (wishListItem) => async () => {
    await deleteWishListItem(wishListItem._id, wishListId);
    await getAllWishListItems(wishListId);
    getItemsFromServer();
  };

  const handleClickAssignee = (wishListItem) => async () => {
    await patchWishListItemAssignee(
      wishListId,
      wishListItem._id,
      wishListItem.picture,
      wishListItem.title,
      wishListItem.comment,
      wishListItem.desireDegree,
      userId
    );
    await getItemsFromServer();
  };

  return (
    <React.Fragment>
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
              {isYourAcc && (
                <div>
                  <td>
                    <input
                      className="inputItem1"
                      placeholder="Здесь нужно указать адрес картинки желаемого подарка в интернете"
                      onChange={handlePicture}
                      value={picture}
                    />
                  </td>
                  <td>
                    <input
                      className="inputItem2"
                      placeholder="Например: Iphone 12 PRO на 128 GB в синем цвете"
                      onChange={handleTitle}
                      value={title}
                    />
                  </td>
                  <td>
                    <input
                      className="inputItem3"
                      placeholder="Расскажите о каких-то особенностях продукта, сфере его применения или любую другую информацию, которая поможет выбрать правильный подарок"
                      onChange={handleComment}
                      value={comment}
                    />
                  </td>
                  <td>
                    <div>
                      <div
                        className="rating-area"
                        onChange={handleDesireDegree}
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
                      onClick={handleSaveWishListItem}
                    >
                      Сохранить
                    </button>
                  </td>
                  <td>
                    <input
                      className="inputWishListItemID"
                      disabled={true}
                      onChange={handleChangeWishListItemId}
                      value={wishListItemId}
                    />
                  </td>
                </div>
              )}
            </tr>
            {wishListItems.map((el) => {
              const hasAssignee = !!el.assigneeId;
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
                        checked={hasAssignee}
                        disabled={hasAssignee}
                      />
                    </div>
                  </td>
                  {/*        <td>
                    <input className="inputItem" disabled={true} value={el._id} />
                  </td> */}
                  {isYourAcc && (
                    <div>
                      <td>
                        <div
                          style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}
                        >
                          <button
                            className="btn-edit"
                            onClick={handleClickEdit(el)}
                            disabled={hasAssignee}
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
                            disabled={hasAssignee}
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
    </React.Fragment>
  );
}
