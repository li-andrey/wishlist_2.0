import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createWishlist } from "../../redux/slices/wishlistSlice";

export default function NewWishList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleNewWishList = async () => {
    const newWishList = dispatch(createWishlist(user._id));
    navigate(`/wishlists/${newWishList._id}`);
  };

  return (
    <div className="create-wishlist">
      <h1 className="second-h1"> Создать свой WishList </h1>
      <button className="btn-pink" onClick={handleNewWishList}>
        Создать
      </button>
    </div>
  );
}
