import Form from './Form/Form';
import styles from './LeftSection.module.scss';

const LeftSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>REFER FRIENDS AND GET REWARDS</div>
      <div className={styles.information}>
        Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs
        our extension. Minimum cash-out at 20 coins.
      </div>

      <Form />

      <div className={styles.message}>Limits on max rewards apply.</div>
    </section>
  );
};

export default LeftSection;
