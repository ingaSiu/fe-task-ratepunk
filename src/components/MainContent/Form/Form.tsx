import { SyntheticEvent, useState } from 'react';

import Button from '../../Button/Button';
import styles from './Form.module.scss';

// formos input btn gali buti pasleptas sone ir kai keiciasi state jis atsiranda

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
    <div className={styles.formWrapper}>
      <div className={styles.title}>REFER FRIENDS AND GET REWARDS</div>
      <div className={styles.information}>
        Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs
        our extension. Minimum cash-out at 20 coins.
      </div>

      <form onSubmit={handleSubmit} className={styles.emailForm}>
        <div className={styles.inputWithIcon}>
          <img src="email.svg" alt="Email icon" />
          <input
            type="text"
            value={email}
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Button>Get Referral Link</Button>
      </form>

      <form className={styles.referralForm}>
        <div className={styles.successMsg}>Success message</div>
        <div className={styles.inputWithBtn}>
          <input type="text" value={referral} onChange={(e) => setReferral(e.target.value)} />
          <button onClick={handleCopy}>Copy</button>
        </div>
      </form>

      <p className={styles.message}>Limits on max rewards apply.</p>
    </div>
  );
};

export default Form;
