import { SyntheticEvent, useState } from 'react';

import Button from '../../Button/Button';
import styles from './Form.module.scss';

const Form = () => {
  const [email, setEmail] = useState('');
  const [referral, setReferral] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setReferral('https://ratepunk.com/referral');
    alert('testing');
  };

  const handleCopy = (e: SyntheticEvent) => {
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

      <form onSubmit={handleSubmit} className={styles.email_form}>
        <div className={styles.input_with_icon}>
          <img src="email.svg" alt="Email icon" />
          <input
            type="text"
            value={email}
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Button name="Get Referral Link" />
      </form>

      <form className={styles.referral_form}>
        <div className={styles.success_msg}>Success message</div>
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
