import styles from './Button.module.scss';

type ButtonProps = {
  name: string;
  children?: React.ReactNode;
};

const Button = ({ name, children }: ButtonProps) => {
  return (
    <button className={styles.btn}>
      {name}
      {children}
    </button>
  );
};

export default Button;
