import styles from './Button.module.scss';

type ButtonProps = {
  children?: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => (
   <button className={styles.btn}>{children}</button>
);

export default Button;
