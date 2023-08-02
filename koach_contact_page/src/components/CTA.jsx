import styles from "../styles/cta.module.css";
import { contactUs } from "../assets";

const CTA = () => (
  <section className={`${styles.cta} ${styles["cta-text"]} text-primary `}>
    <h1 className={styles["cta-title"]}>Contact us</h1>
    <p className={styles.bold}>
      Have a question, suggestion, or partnership opportunity?
    </p>
    <p>
      We&#39;d love to hear from you! Our dedicated team is ready to
      collaborate, innovate, and unlock the potential of expertise for your
      success.
    </p>
    <h2 className={styles["cta-subtitle"]}>Get in touch today!</h2>
    <img
      className={`${styles["cta-img"]} img-responsive`}
      width="560"
      height="287"
      src={contactUs}
      alt="two working women interacting in discussion"
    />
  </section>
);

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
