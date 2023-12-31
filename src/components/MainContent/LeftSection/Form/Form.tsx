import { SyntheticEvent, useState } from 'react';

import Button from '../../../Button/Button';
import ErrorMsg from './error/ErrorMsg';
import Referral from './referral/Referral';
import SuccessMsg from './success/SuccessMsg';
import axios from 'axios';
import styles from './Form.module.scss';

const Form: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailRegex = /^([a-zA-Z0-9._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  const BIN_ID = import.meta.env.VITE_PUBLIC_BIN_URL;
  const ACCESS_KEY = import.meta.env.VITE_PUBLIC_ACCESS_KEY;

  const sendEmail = async () => {
    try {
      setIsSubmitting(true);
      await axios.put(
        `https://api.jsonbin.io/v3/b/${BIN_ID}`,
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Access-Key': ACCESS_KEY,
          },
        },
      );
      setStatus('success');
      setIsSubmitting(false);
    } catch (err) {
      setIsSubmitting(false);
      setStatus('error');
    }
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (email.length === 0) {
      setStatus('empty');
    } else if (!email.match(emailRegex)) {
      setStatus('invalid');
    } else {
      sendEmail();
      setStatus('');
    }
  };

  return (
    <>
      {status === 'error' && <ErrorMsg>Request failed. Try again.</ErrorMsg>}

      {status === 'empty' && <ErrorMsg>Please enter your email</ErrorMsg>}

      {status === 'invalid' && <ErrorMsg>Invalid email. Please enter a valid email, e.g. sample@mail.com</ErrorMsg>}

      {status === 'success' && <SuccessMsg />}

      {status !== 'success' && (
        <form onSubmit={handleSubmit} className={styles.emailForm}>
          <div className={styles.inputWithIcon}>
            <img src="email.svg" alt="Email icon" width={22} height={18.343} />
            <input
              type="text"
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <Button disabled={isSubmitting}>Get Referral Link</Button>
        </form>
      )}

      {status === 'success' && <Referral />}
    </>
  );
};

export default Form;
