import styles from "./WishlistsCard.module.scss";
import WishlistsTable from "../WishlistsTable/WishlistsTable";
import SmallTitle from "../UI/SmallTitle/SmallTitle";
import Search from "../UI/Search/Search";

const WishlistsCard = ({ wishlists }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <SmallTitle>Кому будем дарить подарок?</SmallTitle>
        <Search placeholder="Введите имя" />
      </div>
      <WishlistsTable wishlists={wishlists} />
    </div>
  );
};

export default WishlistsCard;
