import StepCard from './StepCard';
import styles from './StepInfo.module.scss';

const StepInfo = () => {
  return (
    <div className={styles.wrapper}>
      <StepCard
        img="invite.svg"
        altImg="Invitation picture"
        count="STEP 1"
        title="INVITE FRIENDS"
        info="Refer friends with your unique referral link."
      />
      <StepCard
        img="collect-coins.svg"
        altImg="Collect coins picture"
        count="STEP 2"
        title="COLLECT COINS"
        info="Get 1 coin for each friend that installs our extension using your referral link."
      />
      <StepCard
        img="voucher.svg"
        altImg="Voucher picture"
        count="STEP 3"
        title="GET VOUCHER"
        info="Redeem for a $20 hotel booking voucher once you collect 20 coins."
      />
    </div>
  );
};

export default StepInfo;
