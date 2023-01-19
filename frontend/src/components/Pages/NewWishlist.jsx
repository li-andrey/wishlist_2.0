import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createWishlist } from "../../redux/slices/wishlistSlice";

export default function NewWishlist() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleNewWishlist = async () => {
    const newWishlist = await dispatch(createWishlist(user._id));
    navigate(`/wishlists/${newWishlist.payload._id}`);
  };

  return (
    <div className="create-wishlist">
      <h1 className="second-h1"> Создать свой Wishlist </h1>
      <button className="btn-pink" onClick={handleNewWishlist}>
        Создать
      </button>
    </div>
  );
}
