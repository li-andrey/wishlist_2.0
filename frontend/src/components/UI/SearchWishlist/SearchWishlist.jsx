import styles from "./SearchWishlist.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../redux/slices/filterSlice";
import _ from "lodash";

const SearchWishlist = ({ children, placeholder }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const debounceSearch = _.debounce(function () {
    console.log("Function debounced after 1000ms!");
  }, 2000);

  const onChangeInput = (e) => {
    setValue(e.target.value);
    debounceSearch(dispatch(setSearchValue(e.target.value)));
  };

  return (
    <form className={styles.root}>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
        onKeyDown={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      >
        {children}
      </input>
    </form>
  );
};

export default SearchWishlist;
