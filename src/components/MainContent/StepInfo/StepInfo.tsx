import styles from './StepInfo.module.scss';

const StepInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.step}>
        <div className={styles.img_wrapper}>
          <img src="invite.svg" alt="Invitation picture" />
        </div>
        <div className={styles.info_wrapper}>
          <div className={styles.count}>STEP 1</div>
          <div className={styles.title}>INVITE FRIENDS</div>
          <div className={styles.info}>Refer friends with your unique referral link.</div>
        </div>
      </div>

      <div className={styles.step}>
        <div className={styles.img_wrapper}>
          <img src="collect-coins.svg" alt="Collect coins picture" />
        </div>
        <div className={styles.info_wrapper}>
          <div className={styles.count}>STEP 2</div>
          <div className={styles.title}>COLLECT COINS</div>
          <div className={styles.info}>
            Get 1 coin for each friend that installs our extension using your referral link.
          </div>
        </div>
      </div>

      <div className={styles.step}>
        <div className={styles.img_wrapper}>
          <img src="voucher.svg" alt="Voucher picture" />
        </div>
        <div className={styles.info_wrapper}>
          <div className={styles.count}>STEP 3</div>
          <div className={styles.title}>GET VOUCHER</div>
          <div className={styles.info}>Redeem for a $20 hotel booking voucher once you collect 20 coins.</div>
        </div>
      </div>
    </div>
  );
};

export default StepInfo;
