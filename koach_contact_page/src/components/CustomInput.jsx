import styles from "../styles/custom-input.module.css";
import { useField } from "formik";

const CustomInput = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles["input-item"]}>
      <input
        {...field}
        {...props}
        className={`${meta.touched && meta.error ? styles["input-error"] : ""}`}
      />
      {meta.touched && meta.error && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  );
};

export default CustomInput;
