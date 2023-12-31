import { AiFillStar } from 'react-icons/ai';
import ContentCard from './ContentCard';
import styles from './StoreContent.module.scss';

const StoreContent = () => (
  <div className={styles.wrapper}>
    <ContentCard
      link="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
      name="chrome.svg"
      text="available in the"
      storeName="chrome web store"
    />
    <ContentCard
      link="https://apps.apple.com/app/ratepunk/id1607823726"
      name="apple.svg"
      text="available in the"
      storeName="apple app store "
    />
    <div className={styles.reviewsContainer}>
      <div className={styles.iconWrapper}>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <p className={styles.reviewsText}>Chrome store reviews</p>
    </div>
  </div>
);

export default StoreContent;
