import styles from "./SortPopup.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../../redux/slices/filterSlice";
import arrDown from "../../../assets/icons/arrDown.png";

const SortPopup = ({ sortValue }) => {
  const sortList = [
    { name: "названию ⇧", property: "titleAsc" },
    { name: "названию ⇩", property: "titleDesc" },
    { name: "рейтингу ⇧", property: "desireAsc" },
    { name: "рейтингу ⇩", property: "desireDesc" },
  ];

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const chooseSort = (s) => {
    dispatch(setSort(s));
    setOpen(!open);
  };
  return (
    <div className={styles.sortWrapper}>
      <div className={styles.static}>
        Сортировка по:
        <div className={styles.sortDropDown} onClick={() => setOpen(!open)}>
          {sortValue.name ? (
            <span className={styles.sortType}>{sortValue.name}</span>
          ) : (
            <img className={styles.sortImg} src={arrDown} />
          )}
        </div>
      </div>

      {open && (
        <ul className={styles.sortList}>
          {sortList.map((s) => (
            <li
              className={styles.sortItem}
              key={s.property}
              onClick={() => chooseSort(s)}
            >
              {s.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortPopup;
