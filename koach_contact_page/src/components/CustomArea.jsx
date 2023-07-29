import styles from "../styles/custom-input.module.css";
import { useField } from "formik";

const CustomArea = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles["textarea-item"]}>
      <textarea
        {...field}
        {...props}
        className={`${meta.touched && meta.error ? styles["input-error"] : ""}`}
        rows="6"
      />
      {meta.touched && meta.error && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  );
};

export default CustomArea;
