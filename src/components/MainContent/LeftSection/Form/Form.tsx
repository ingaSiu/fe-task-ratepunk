import { SyntheticEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';

import Button from '../../../Button/Button';
import ErrorMsg from './error/ErrorMsg';
import Referral from './referral/Referral';
import SuccessMsg from './success/SuccessMsg';
import styles from './Form.module.scss';

const Form: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const validateEmail = /^([a-zA-Z0-9._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  const BIN_ID = import.meta.env.VITE_PUBLIC_BIN_URL;
  const ACCESS_KEY = import.meta.env.VITE_PUBLIC_ACCESS_KEY;

  const sendEmail = () => {
    try {
      setIsSubmitting(true);
      axios
        .put(`https://api.jsonbin.io/v3/b/${BIN_ID}`, `{"email":"${email}"}`, {
          headers: {
            'Content-Type': 'application/json',
            'X-Access-Key': ACCESS_KEY,
          },
        })
        .then(() => {
          setStatus('success');
          setIsSubmitting(false);
        })
        .catch(() => {
          setStatus('error');
          setIsSubmitting(false);
        });
    } catch (err) {
      console.log((err as AxiosError).message);
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (email.length === 0) {
      setStatus('empty');
    } else if (!email.match(validateEmail)) {
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
