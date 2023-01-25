import Arrow from "../UI/Arrow/Arrow";
import { useNavigate } from "react-router-dom";
import styles from "./WishlistsTable.module.scss";

const WishlistsTable = ({ wishlists }) => {
  const navigate = useNavigate();

  return (
    <table className={styles.table}>
      <tbody>
        {wishlists.map((el) => (
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
