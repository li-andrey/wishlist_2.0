import styles from "./Search.module.scss";
import search from "../../../assets/icons/search.png";

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
      <div className={styles.iconBox}>
        <img className={styles.icon} src={search} />
      </div>
    </form>
  );
};

export default Search;
