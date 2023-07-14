import styles from './Button.module.scss';

// TODO
// padaryti vietoj name text arba tiesiog name istrinti ir ideti teksta kaip childen, nes ten
// ne pats pavadinimas o labiau tiesiog tekstas ant btn
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
