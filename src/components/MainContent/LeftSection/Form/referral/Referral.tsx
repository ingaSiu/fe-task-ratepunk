import Button from '../../../../Button/Button';
import styles from './Referral.module.scss';
import { useRef } from 'react';

const Referral: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const value = 'https://ratepunk.com/referral';

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };
  return (
    <>
      <div className={styles.inputWithBtn}>
        <input type="text" ref={inputRef} value={value} readOnly />
        <button onClick={handleCopy}>Copy</button>
      </div>

      <div className={styles.mobileWrapper}>
        <input type="text" ref={inputRef} value={value} className={styles.inputMobile} readOnly />

        <Button onClick={handleCopy}>Copy URL</Button>
      </div>
    </>
  );
};

export default Referral;
