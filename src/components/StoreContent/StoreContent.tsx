import { AiFillStar } from 'react-icons/ai';
import styles from './StoreContent.module.scss';

const StoreContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.store_container}>
        <a
          href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
          target="_blank"
        >
          <img src="chrome.svg" alt="Chrome icon" />
        </a>
        <div>
          <p className={styles.text}>available in the</p>
          <p className={styles.store_name}>chrome web store</p>
        </div>
      </div>

      <div className={styles.store_container}>
        <a href="https://apps.apple.com/app/ratepunk/id1607823726" target="_blank">
          <img src="apple.svg" alt="Apple icon" />
        </a>
        <div>
          <p className={styles.text}>available in the</p>
          <p className={styles.store_name}>apple app store</p>
        </div>
      </div>

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
