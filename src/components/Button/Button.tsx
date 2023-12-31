import styles from './Button.module.scss';

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (event: React.SyntheticEvent) => void;
  disabled?: boolean;
};

const Button = ({ children, onClick }: ButtonProps) => (
  <button className={styles.btn} onClick={onClick} disabled={false}>
    {children}
  </button>
);

export default Button;
