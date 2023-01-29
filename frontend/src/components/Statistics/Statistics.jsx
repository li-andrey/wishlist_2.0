import styles from "./Statistics.module.scss";

const Statistics = ({ wishlists, allItems }) => {
  const date = new Date(2020, 10, 1);
  const diff = new Date() - +date;
  const years = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);

  return (
    <div className={styles.container}>
      <div className={styles.gridItem}>
        <div className={styles.num}>
          <span>{wishlists.length}</span>
        </div>
        <p>пользователей</p>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.num}>
          <span>
            {">"}
            {years}
          </span>
        </div>
        <p>лет работы</p>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.num}>
          <span>{allItems.length}</span>
        </div>
        <p>подарков добавленно</p>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.num}>
          <span>{allItems.length}</span>
        </div>
        <p>подарков подаренно</p>
      </div>
    </div>
  );
};

export default Statistics;
