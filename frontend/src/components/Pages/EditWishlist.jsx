import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getWishlist } from "../../redux/slices/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import SecondTitle from "../UI/SecondTitle/SecondTitle";
import WishlistItemsTable from "../WishlistItemsTable/WishlistItemsTable";

const EditWishlist = () => {
  const [owner, setOwner] = useState([]);
  const [isYourWishlist, setIsYourWishlist] = useState(false);

  const { wishlistId } = useParams();
  const userId = useSelector((state) => state.auth.user._id);

  const dispatch = useDispatch();

  // Получение wishlist, определение его владельца и выяснение свой или чужой wishlist
  useEffect(() => {
    const findWishlist = async () => {
      const { payload } = await dispatch(getWishlist(wishlistId));
      setOwner(payload.owner);
      if (userId === payload.owner._id) {
        setIsYourWishlist(true);
      }
    };
    findWishlist();
  }, [wishlistId]);

  return (
    <>
      <SecondTitle>
        {isYourWishlist
          ? `Это ваш wishlist`
          : `Владелец этого wishlist - ${owner.name}`}
      </SecondTitle>
      <WishlistItemsTable
        wishlistId={wishlistId}
        userId={userId}
        isYourWishlist={isYourWishlist}
      />
    </>
  );
};
export default EditWishlist;
