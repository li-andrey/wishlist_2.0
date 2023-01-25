import styles from "./Quote.module.scss";

const Quote = () => {
  return (
    <div className={styles.quoteWrapper}>
      <blockquote className={styles.quote}>
        <em>
          Для всех тех, кто точно знает, какой хочет подарок и тех, кто не
          знает, что подарить
        </em>
      </blockquote>
    </div>
  );
};

export default Quote;
