import Button from '../../Button/Button';
import styles from './Form.module.scss';
import { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [referral, setReferral] = useState('');

  const handleSubmit = () => {
    setReferral('https://ratepunk.com/referral');
  };

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(referral);
  };
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.title}>REFER FRIENDS AND GET REWARDS</div>
      <div className={styles.information}>
        Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs
        our extension. Minimum cash-out at 20 coins.
      </div>
      <form>
        <div>Error msg</div>

        <input
          type="text"
          value={email}
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button />
      </form>

      <form>
        <div>Success message</div>
        <div className={styles.input_with_btn}>
          <input type="text" value={referral} onChange={(e) => setReferral(e.target.value)} />
          <button onClick={handleCopy}>Copy</button>
        </div>
      </form>

      <p className={styles.message}>Limits on max rewards apply.</p>
    </div>
  );
};

export default Form;
