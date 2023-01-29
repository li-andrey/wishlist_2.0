import styles from "./WishlistsCard.module.scss";
import WishlistsTable from "../WishlistsTable/WishlistsTable";
import SmallTitle from "../UI/SmallTitle/SmallTitle";
import SearchWishlist from "../UI/SearchWishlist/SearchWishlist";

const WishlistsCard = ({ wishlists }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <SmallTitle>Кому будем дарить подарок?</SmallTitle>
        <SearchWishlist placeholder="Введите имя" />
      </div>
      <WishlistsTable wishlists={wishlists} />
    </div>
  );
};

export default WishlistsCard;
