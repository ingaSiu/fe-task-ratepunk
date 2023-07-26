import MobileMenu from './MobileMenu/MobileMenu';
import styles from './Nav.module.scss';

const Nav = () => (
  <div className={styles.nav}>
    <div className={styles.leftContainer}>
      <img src="logo.svg" alt="Ratepunk logo" />
    </div>
    <div className={styles.rightContainer}>
      <div className={styles.linksWrapper}>
        <a href="#">Chrome Extension</a>
        <a href="#">Price Comparision</a>
        <a href="#">Blog</a>
      </div>
    </div>

    <MobileMenu />
  </div>
);

export default Nav;
