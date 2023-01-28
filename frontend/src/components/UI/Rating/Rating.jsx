import styles from "./Rating.module.scss";

const Rating = ({ onChange, desireDegree }) => {
  return (
    <div className={styles.ratingCard}>
      <h6 className={styles.ratingTitle}>
        Оцените степень важности подарка (от 1 до 5)
      </h6>
      <div className={styles.ratingArea} onChange={onChange}>
        <input
          type="radio"
          id="star-5"
          value="5"
          checked={desireDegree === "5"}
          readOnly
        />
        <label htmlFor="star-5" title="Оценка «5»" />
        <input
          type="radio"
          id="star-4"
          value="4"
          checked={desireDegree === "4"}
          readOnly
        />
        <label htmlFor="star-4" title="Оценка «4»" />
        <input
          type="radio"
          id="star-3"
          value="3"
          checked={desireDegree === "3"}
          readOnly
        />
        <label htmlFor="star-3" title="Оценка «3»" />
        <input
          type="radio"
          id="star-2"
          value="2"
          checked={desireDegree === "2"}
          readOnly
        />
        <label htmlFor="star-2" title="Оценка «2»" />
        <input
          type="radio"
          id="star-1"
          value="1"
          checked={desireDegree === "1"}
          readOnly
        />
        <label htmlFor="star-1" title="Оценка «1»" />
      </div>
    </div>
  );
};

export default Rating;
