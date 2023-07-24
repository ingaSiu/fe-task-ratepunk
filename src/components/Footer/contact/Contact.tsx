import SocialCard from './SocialCard';
import styles from './Contact.module.scss';

const Contact = () => (
  <div className={styles.contact_wrapper}>
    <div>
      <div className={styles.titles}>CONTACT</div>
      <div className={styles.email_footer}>
        <img src="email-footer.svg" alt="Email icon" />
        <div>hi@ratepunk.com</div>
      </div>
    </div>

    <div>
      <div className={styles.titles}>SOCIAL</div>
      <div className={styles.social_wrapper}>
        <SocialCard src="instagram.svg" alt="Instagram icon" />
        <SocialCard src="facebook.svg" alt="Facebook icon" />
        <SocialCard src="linkedin.svg" alt="Linkedin icon" />
        <SocialCard src="twitter.svg" alt="Twitter icon" />
        <SocialCard src="tiktok.svg" alt="Tiktok icon" />
      </div>
    </div>
  </div>
);

export default Contact;
