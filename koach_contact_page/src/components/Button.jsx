import styles from "../styles/button.module.css";

const Button = (props) => (
  <button className={styles.button} type={props.type} disabled={props.disabled}>
    {props.text}
  </button>
);

export default Button;
