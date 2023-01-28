import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllWishlists } from "../../redux/slices/wishlistSlice";
import { getAllItems } from "../../redux/slices/wishlistItemSlice";
import MainTitle from "../UI/MainTitle/MainTitle";
import WishlistsCard from "../WishlistsCard/WishlistsCard";
import Statistics from "../Statistics/Statistics";

const Home = () => {
  const dispatch = useDispatch();
  const { wishlists } = useSelector((state) => state.wishlists);
  const { allItems } = useSelector((state) => state.wishlistItems);
  useEffect(() => {
    dispatch(getAllWishlists());
    dispatch(getAllItems());
  }, []);

  return (
    <div>
      <MainTitle>Дари и получай то, что нужно</MainTitle>
      <Statistics wishlists={wishlists} allItems={allItems} />

      <WishlistsCard wishlists={wishlists} />
    </div>
  );
};

export default Home;
