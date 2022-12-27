import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

async function postWishList(userId) {
  // Default options are marked with *
  const data = { userId };
  const url = "http://localhost:3100/api/wishlists";
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

export default function NewWishList() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const userId = auth.userId;

  const handleNewWishList = async () => {
    const newWishList = await postWishList(userId);
    navigate(`/wishlists/${newWishList._id}`);
  };

  return (
    <React.Fragment>
      <div className="create-wishlist">
        <h1 className="second-h1"> Создать свой WishList </h1>
        <button className="btn-pink" onClick={handleNewWishList}>
          Создать
        </button>
      </div>
    </React.Fragment>
  );
}
