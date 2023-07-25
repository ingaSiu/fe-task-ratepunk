import styles from './Links.module.scss';

const Links = () => (
  <div className={styles.links}>
    <div className={styles.links_title}>QUICK LINKS</div>

    <a href="#">Price Comparison</a>

    <a href="#">Chrome Extension</a>

    <a href="#">How It Works</a>

    <a href="#">Ratepunk Blog</a>

    <a href="#">Privacy Policy</a>
  </div>
);

export default Links;
