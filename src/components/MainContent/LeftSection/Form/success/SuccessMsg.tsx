import styles from './SuccessMsg.module.scss';

const SuccessMsg = () => (
  <div className={styles.successMsg}>
    <img src="success.svg" alt="Successful email confirmation icon" width={32} height={32} />
    <div className={styles.text}>Your email is confirmed!</div>
  </div>
);

export default SuccessMsg;
