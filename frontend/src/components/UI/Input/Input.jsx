import styles from "./Input.module.scss";

const Input = ({ placeholder, onChange, value, label }) => {
  return (
    <label className={styles.input}>
      <input
        className={styles.inputField}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="text"
      />
      <span className={styles.inputLabel}>{label}</span>
    </label>
  );
};

export default Input;
