import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.left_container}>
        <img src="logo.svg" alt="Ratepunk logo" />
      </div>
      <div className={styles.right_container}>
        <div className={styles.links_wrapper}>
          <a href="#">Chrome Extension</a>
          <a href="#">Price Comparision</a>
          <a href="#">Blog</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
