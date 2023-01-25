import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllWishlists } from "../../redux/slices/wishlistSlice";
import MainTitle from "../UI/MainTitle/MainTitle";
import WishlistsCard from "../WishlistsCard/WishlistsCard";
import Statistics from "../Statistics/Statistics";

const Home = () => {
  const dispatch = useDispatch();
  const { wishlists } = useSelector((state) => state.wishlists);

  React.useEffect(() => {
    dispatch(getAllWishlists());
  }, []);

  return (
    <div>
      <MainTitle>Дари и получай то, что нужно</MainTitle>
      <Statistics />

      <WishlistsCard wishlists={wishlists} />
    </div>
  );
};

export default Home;
