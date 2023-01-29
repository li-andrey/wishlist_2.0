import styles from "./CreateItemForm.module.scss";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Rating from "../UI/Rating/Rating";
import SmallTitle from "../UI/SmallTitle/SmallTitle";
import ButtonCancel from "../UI/ButtonCancel/ButtonCancel";

const CreateItemForm = ({
  wishlistItem,
  setWishlistItem,
  active,
  handleSaveWishlistItem,
  setOpenEdit,
}) => {
  if (!active) return null;
  return (
    <div className={styles.wrapper}>
      <span className={styles.close} onClick={() => setOpenEdit(false)}>
        ×
      </span>
      <div className={styles.card}>
        <SmallTitle>Добавьте желаемый подарок</SmallTitle>
        <h6 className={styles.subTitle}>Или отредактируйте уже добавленный</h6>
        <div className={styles.form}>
          <Input
            placeholder="Адрес картинки желаемого подарка в интернете"
            onChange={(e) =>
              setWishlistItem({ ...wishlistItem, picture: e.target.value })
            }
            value={wishlistItem.picture}
            label="Картинка"
          />

          <Input
            placeholder="Заголовок, например: Iphone 12 PRO на 128 GB в синем цвете"
            onChange={(e) =>
              setWishlistItem({ ...wishlistItem, title: e.target.value })
            }
            value={wishlistItem.title}
            label="Заголовок"
          />
          <div className={styles.subgrid}>
            <Input
              placeholder="Информация, которая поможет выбрать правильный подарок"
              onChange={(e) =>
                setWishlistItem({ ...wishlistItem, comment: e.target.value })
              }
              value={wishlistItem.comment}
              label="Комментарий"
            />
          </div>

          <div>
            <Rating
              onChange={(e) =>
                setWishlistItem({
                  ...wishlistItem,
                  desireDegree: e.target.value,
                })
              }
              desireDegree={wishlistItem.desireDegree}
            />
          </div>
          <Button onClick={handleSaveWishlistItem}>Сохранить</Button>
          <ButtonCancel onClick={() => setOpenEdit(false)}>
            Отменить
          </ButtonCancel>
        </div>
        {/* <input
        className="inputWishlistItemID"
        disabled={true}
        onChange={(e) =>
          setWishlistItem({ ...wishlistItem, wishlistItem: e.target.value })
        }
        value={wishlistItem.wishlistItemId}
      /> */}
      </div>
    </div>
  );
};

export default CreateItemForm;
