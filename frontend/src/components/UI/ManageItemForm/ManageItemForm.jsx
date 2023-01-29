import styles from "./ManageItemForm.module.scss";

const ManageItemForm = ({
  handleClickEdit,
  handleClickDelete,
  item,
  active,
}) => {
  if (!active) return null;
  return (
    <div className={styles.form}>
      <button className={styles.btn_edit} onClick={handleClickEdit(item)}>
        Редактировать
      </button>

      <button className={styles.btn_del} onClick={handleClickDelete(item)}>
        Удалить
      </button>
    </div>
  );
};

export default ManageItemForm;
