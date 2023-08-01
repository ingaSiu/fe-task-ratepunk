import styles from './Button.module.scss';

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (event: React.SyntheticEvent) => void;
};

const Button = ({ children, onClick }: ButtonProps) => (
  <button className={styles.btn} onClick={onClick}>
    {children}
  </button>
);

export default Button;
