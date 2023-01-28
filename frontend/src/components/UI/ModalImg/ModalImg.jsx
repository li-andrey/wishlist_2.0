import styles from "./ModalImg.module.scss";
import ItemImg from "../ItemImg/ItemImg";

const ModalImg = ({ openImg, setOpenImg, item, clickedItem }) => {
  if (!openImg) {
    return null;
  }
  if (clickedItem === item._id) {
    return (
      <div className={styles.modal}>
        <span className={styles.close} onClick={() => setOpenImg(false)}>
          ×
        </span>
        <div className={styles.modalImg}>
          <ItemImg picture={item.picture} />
        </div>
        <div className={styles.caption}>{item.title}</div>
      </div>
    );
  }
};

export default ModalImg;
