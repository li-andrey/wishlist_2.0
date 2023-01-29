import styles from "./AssignBtn.module.scss";

const AssignBtn = ({ handleClickAssignee, item, isAssignee, children }) => {
  return (
    <button
      className={isAssignee ? `${styles.btn} ${styles.active}` : styles.btn}
      onClick={handleClickAssignee(item)}
      disabled={isAssignee ? true : false}
    >
      {children}
    </button>
  );
};

export default AssignBtn;
