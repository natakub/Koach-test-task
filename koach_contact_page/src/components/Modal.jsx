import styles from "../styles/modal.module.css";
import { ReactSVG } from "react-svg";
import { check, close } from "../assets";

const Modal = (props) => {
  const { name, modal, toggleModal } = props;

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {modal && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={toggleModal}>
            <div className={styles["modal-content"]}>
              <ReactSVG src={check} />
              <p>Thank You {name}!</p>
              <p>We will contact you within two days.</p>
              <button className={styles["close-modal"]} onClick={toggleModal}>
                <ReactSVG src={close} className={styles["close-modal-icon"]} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
