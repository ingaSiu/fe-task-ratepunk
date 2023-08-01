import styles from './ErrorMsg.module.scss';

type ErrorProps = {
  children: string;
};

const ErrorMsg: React.FC<ErrorProps> = ({ children }) => <p className={styles.errorMsg}>{children}</p>;

export default ErrorMsg;
