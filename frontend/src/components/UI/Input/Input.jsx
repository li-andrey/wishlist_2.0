import styles from "./Input.module.scss";

const Input = ({ placeholder, onChange, inputValue, name, label }) => {
  return (
    <label className={styles.input}>
      <input
        className={styles.inputField}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
        name={name}
        type="text"
      />
      <span className={styles.inputLabel}>{label}</span>
    </label>
  );
};

export default Input;
