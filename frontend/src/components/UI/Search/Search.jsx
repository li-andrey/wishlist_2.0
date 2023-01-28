import styles from "./Search.module.scss";

const Search = ({ onClick, children, placeholder }) => {
  return (
    <form className={styles.root}>
      <input
        className={styles.input}
        placeholder={placeholder}
        onClick={onClick}
      >
        {children}
      </input>
      {/* <div className={styles.iconBox}>
        <img className={styles.icon} src={search} />
      </div> */}
    </form>
  );
};

export default Search;
