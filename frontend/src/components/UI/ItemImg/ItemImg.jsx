import styles from "./ItemImg.module.scss";
import cardImg from "../../../assets/img/skeleton.png";

const ItemImg = ({ picture }) => {
  if (!picture) {
    return <img className={styles.imgSkeleton} alt="Желание" src={cardImg} />;
  }
  return <img className={styles.img} alt="Желание" src={picture} />;
};

export default ItemImg;
