import styles from "../styles/footer.module.css";
import { footerLinks, socialMedia } from "../constants";
import { ReactSVG } from "react-svg";

const Footer = () => (
  <footer className="container">
    <div className={`${styles["footer-info-wrap"]} flex-justify-between`}>
      <div className={styles["footer-text"]}>
        <p className={styles["footer-logo"]}>Koach</p>
        <p className="text-primary">
          We match the right initiatives with the right expertise, fostering
          flexible connections and empowering success.
        </p>
      </div>

      <div className={styles["footer-nav"]}>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title} className={styles["footer-nav-block"]}>
            <h2 className={styles["footer-nav-title"]}>{footerLink.title}</h2>
            <ul>
              {footerLink.links.map((link) => (
                <li key={link.name}>
                  <a href={link.link} target="_blanck">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className={styles["footer-social"]}>
      {socialMedia.map((social) => (
        <ReactSVG
          key={social.id}
          className={styles["footer-social-icon"]}
          src={social.icon}
          onClick={() => window.open(social.link)}
        />
      ))}
    </div>
  </footer>
);

export default Footer;
