import SocialCard from './SocialCard';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ratepunk_info}>
        <img src="logo.svg" alt="Ratepunk logo" />
        <p className={styles.ratepunk_about}>
          Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room,
          Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing
          you’re getting the best deal!
        </p>
        <p className={styles.copyright}>© 2021 Ratepunk. All Rights Reserved.</p>
      </div>

      <div className={styles.right_container}>
        <div className={styles.links}>
          <div className={styles.links_title}>QUICK LINKS</div>

          <a href="#">Price Comparison</a>

          <a href="#">Chrome Extension</a>

          <a href="#">How It Works</a>

          <a href="#">Ratepunk Blog</a>

          <a href="#">Privacy Policy</a>
        </div>

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
      </div>
    </div>
  );
};

export default Footer;
