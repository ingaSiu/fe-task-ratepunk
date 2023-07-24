import Contact from './contact/Contact';
import Info from './info/Info';
import Links from './links/Links';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Info />

      <div className={styles.right_container}>
        <Links />

        <Contact />
      </div>
      <p className={styles.copyright}>© 2021 Ratepunk. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
