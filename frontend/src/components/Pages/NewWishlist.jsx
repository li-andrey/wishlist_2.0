import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createWishlist } from "../../redux/slices/wishlistSlice";
import { Button } from "../UI/Button/Button";
import SecondTitle from "../UI/SecondTitle/SecondTitle";

const NewWishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleNewWishlist = async () => {
    const newWishlist = await dispatch(createWishlist(user._id));
    navigate(`/wishlists/${newWishlist.payload._id}`);
  };

  return (
    <div>
      <SecondTitle> Создать свой Wishlist </SecondTitle>
      <Button onClick={handleNewWishlist}>Создать</Button>
    </div>
  );
};

export default NewWishlist;
