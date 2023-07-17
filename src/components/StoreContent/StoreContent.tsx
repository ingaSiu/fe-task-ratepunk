import { AiFillStar } from 'react-icons/ai'
import styles from './StoreContent.module.scss';

// padaryti atskira componenta ir per props paduoti tuos vardus

const StoreContent = () => {
  return (
    <div className={styles.wrapper}>
      <a
        href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
        target="_blank"
      >
        <div className={styles.store_container}>
          <img src="chrome.svg" alt="Chrome icon" />

          <div>
            <p className={styles.text}>available in the</p>
            <p className={styles.store_name}>chrome web store</p>
          </div>
        </div>
      </a>
      <a href="https://apps.apple.com/app/ratepunk/id1607823726" target="_blank">
        <div className={styles.store_container}>
          <img src="apple.svg" alt="Apple icon" />

          <div>
            <p className={styles.text}>available in the</p>
            <p className={styles.store_name}>apple app store</p>
          </div>
        </div>
      </a>
      <div className={styles.reviews_container}>
        <div className={styles.icon_wrapper}>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className={styles.reviews_text}>Chrome store reviews</p>
      </div>
    </div>
  );
};

export default StoreContent;
