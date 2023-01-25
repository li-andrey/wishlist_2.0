import styles from "./Statistics.module.scss";

const Statistics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridItem}>
        <div className={styles.num}>
          <span>15</span>
        </div>
        <p>пользователей</p>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.num}>
          <span>15</span>
        </div>
        <p>года работы</p>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.num}>
          <span>15</span>
        </div>
        <p>подарков добавленно</p>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.num}>
          <span>15</span>
        </div>
        <p>подарков подаренно</p>
      </div>
    </div>
  );
};

export default Statistics;
