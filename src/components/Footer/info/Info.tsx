import styles from './Info.module.scss';

const Info = () => (
  <div className={styles.ratepunk_info}>
    <img src="logo.svg" alt="Ratepunk logo" width={125} height={32} />
    <p className={styles.ratepunk_about}>
      Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk
      extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you’re
      getting the best deal!
    </p>
    <p className={styles.copyright}>© 2021 Ratepunk. All Rights Reserved.</p>
  </div>
);

export default Info;
