import styles from "./CreateItemForm.module.scss";

const CreateItemForm = ({
  wishlistItem,
  setWishlistItem,
  active,
  handleSaveWishlistItem,
}) => {
  if (!active) return null;
  return (
    <div>
      <input
        className="inputItem1"
        placeholder="Здесь нужно указать адрес картинки желаемого подарка в интернете"
        onChange={(e) =>
          setWishlistItem({ ...wishlistItem, picture: e.target.value })
        }
        value={wishlistItem.picture}
      />

      <input
        className="inputItem2"
        placeholder="Например: Iphone 12 PRO на 128 GB в синем цвете"
        onChange={(e) =>
          setWishlistItem({ ...wishlistItem, title: e.target.value })
        }
        value={wishlistItem.title}
      />

      <input
        className="inputItem3"
        placeholder="Расскажите о каких-то особенностях продукта, сфере его применения или любую другую информацию, которая поможет выбрать правильный подарок"
        onChange={(e) =>
          setWishlistItem({ ...wishlistItem, comment: e.target.value })
        }
        value={wishlistItem.comment}
      />
      <div>
        <div
          className="rating-area"
          onChange={(e) =>
            setWishlistItem({ ...wishlistItem, desireDegree: e.target.value })
          }
        >
          <input
            type="radio"
            id="star-5"
            name="rating"
            value="5"
            checked={wishlistItem.desireDegree === "5"}
            readOnly
          />
          <label htmlFor="star-5" title="Оценка «5»" />
          <input
            type="radio"
            id="star-4"
            name="rating"
            value="4"
            checked={wishlistItem.desireDegree === "4"}
            readOnly
          />
          <label htmlFor="star-4" title="Оценка «4»" />
          <input
            type="radio"
            id="star-3"
            name="rating"
            value="3"
            checked={wishlistItem.desireDegree === "3"}
            readOnly
          />
          <label htmlFor="star-3" title="Оценка «3»" />
          <input
            type="radio"
            id="star-2"
            name="rating"
            value="2"
            checked={wishlistItem.desireDegree === "2"}
            readOnly
          />
          <label htmlFor="star-2" title="Оценка «2»" />
          <input
            type="radio"
            id="star-1"
            name="rating"
            value="1"
            checked={wishlistItem.desireDegree === "1"}
            readOnly
          />
          <label htmlFor="star-1" title="Оценка «1»" />
        </div>
      </div>
      <input className="tb-booking" type="checkbox" disabled />
      <button className="btn-edit" onClick={handleSaveWishlistItem}>
        Сохранить
      </button>
      {/* <input
        className="inputWishlistItemID"
        disabled={true}
        onChange={(e) =>
          setWishlistItem({ ...wishlistItem, wishlistItem: e.target.value })
        }
        value={wishlistItem.wishlistItemId}
      /> */}
    </div>
  );
};

export default CreateItemForm;
