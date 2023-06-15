import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ratepuink_info}>
        <img src="logo.svg" alt="Ratepunk logo" />
        <p className={styles.ratepunk_about}>
          Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room,
          Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing
          you’re getting the best deal!
        </p>
        <p className={styles.copyright}>© 2021 Ratepunk. All Rights Reserved.</p>
      </div>

      <div className={styles.links}>
        <p>QUICK LINKS</p>
        <ul>
          <li>
            <a href="#">Price Comparison</a>
          </li>
          <li>
            <a href="#">Chrome Extension</a>
          </li>
          <li>
            <a href="#">How It Works</a>
          </li>
          <li>
            <a href="#">Ratepunk Blog</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>

      <div>
        <div>
          <p>CONTACT</p>
          <div>
            <img src="email-footer.svg" alt="Email icon" />
            <p>hi@ratepunk.com</p>
          </div>
        </div>

        <div>
          <p>SOCIAL</p>
          <div className={styles.social_wrapper}>
            <div className={styles.img_wrapper}>
              <img src="instagram.svg" alt="Instagram icon" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="facebook.svg" alt="Facebook icon" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="linkedin.svg" alt="Linkedin icon" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="twitter.svg" alt="Twitter icon" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="tiktok.svg" alt="TikTok icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
