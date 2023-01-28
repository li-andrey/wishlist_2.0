import styles from "./CardItem.module.scss";
import { useState } from "react";

import ItemImg from "../ItemImg/ItemImg";
import AssignBtn from "../AssignBtn/AssignBtn";
import ManageItemForm from "../ManageItemForm/ManageItemForm";
import expand from "../../../assets/icons/expand.png";
import ModalImg from "../ModalImg/ModalImg";
import ModalEdit from "../ModalImg/ModalImg";

const CardItem = ({
  item,
  handleClickAssignee,
  isAssignee,
  isYourWishlist,
  handleClickEdit,
  handleClickDelete,
}) => {
  const [openImg, setOpenImg] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [clickedItem, setclickedItem] = useState();

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <ItemImg picture={item.picture} />
        <div
          className={styles.openIcon}
          onClick={() => {
            setOpenImg(true);
            setclickedItem(item._id);
          }}
        >
          <img src={expand}></img>
        </div>
      </div>
      <div className={styles.content}>
        <h6 className={styles.title}>{item.title}</h6>
        <p className={styles.comment}>{item.comment}</p>
        <div className={styles.desireDegree}>
          <input
            type="radio"
            id="star-5"
            checked={item.desireDegree === 5}
            readOnly
          />
          <label htmlFor="star-5" title="Оценка «5»" />
          <input
            type="radio"
            id="star-4"
            checked={item.desireDegree === 4}
            readOnly
          />
          <label htmlFor="star-4" title="Оценка «4»" />
          <input
            type="radio"
            id="star-3"
            checked={item.desireDegree === 3}
            readOnly
          />
          <label htmlFor="star-3" title="Оценка «3»" />
          <input
            type="radio"
            id="star-2"
            checked={item.desireDegree === 2}
            readOnly
          />
          <label htmlFor="star-2" title="Оценка «2»" />

          <input
            type="radio"
            id="star-1"
            checked={item.desireDegree === 1}
            readOnly
          />
          <label htmlFor="star-1" title="Оценка «1»" />
        </div>

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
      <ModalImg
        item={item}
        openImg={openImg}
        setOpenImg={setOpenImg}
        clickedItem={clickedItem}
      />
      <ModalEdit
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        clickedItem={clickedItem}
      />
    </div>
  );
};

export default CardItem;
