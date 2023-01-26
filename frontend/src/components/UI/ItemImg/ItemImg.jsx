import styles from "./ItemImg.module.scss";

const ItemImg = ({ picture }) => {
  return <img className={styles.img} alt="Желание" src={picture} />;
};

export default ItemImg;
