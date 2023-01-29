import styles from "./WishlistsTable.module.scss";
import Arrow from "../UI/Arrow/Arrow";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const WishlistsTable = ({ wishlists }) => {
  const navigate = useNavigate();
  const { searchValue } = useSelector((state) => state.filter);

  return (
    <table className={styles.table}>
      <tbody>
        {wishlists
          .filter((el) =>
            el.owner.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((el) => (
            <tr key={el._id}>
              <th>
                <div>{el.owner.name}</div>
              </th>
              <td>
                <Arrow
                  onClick={() => {
                    navigate(`/wishlists/${el._id}`);
                  }}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default WishlistsTable;
