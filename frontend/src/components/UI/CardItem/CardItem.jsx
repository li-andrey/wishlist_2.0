import { useSelector } from "react-redux";
import styles from "./CardItem.module.scss";

import ItemImg from "../ItemImg/ItemImg";
import AssignBtn from "../AssignBtn/AssignBtn";
import ManageItemForm from "../ManageItemForm/ManageItemForm";

const CardItem = ({
  item,
  handleClickAssignee,
  isAssignee,
  isYourWishlist,
  handleClickEdit,
  handleClickDelete,
}) => {
  const userId = useSelector((state) => state.auth.user._id);

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <ItemImg picture={item.picture} />
      </div>
      <div className={styles.content}>
        <h6 className={styles.title}>{item.title}</h6>
        <p className={styles.comment}>{item.comment}</p>
        <div className={styles.desireDegree}>{item.desireDegree}</div>
        {isYourWishlist ? (
          <ManageItemForm
            item={item}
            handleClickEdit={handleClickEdit}
            handleClickDelete={handleClickDelete}
            active={isYourWishlist}
          />
        ) : (
          <AssignBtn
            handleClickAssignee={handleClickAssignee}
            item={item}
            isAssignee={isAssignee}
          >
            {!isAssignee ? "Забронировать" : "Уже забронировали"}
          </AssignBtn>
        )}
      </div>
    </div>
  );
};

export default CardItem;
