import Form from './Form/Form';
import StepInfo from './StepInfo/StepInfo';
import styles from './MainContent.module.scss';

const MainContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <Form />
      </div>
      <div className={styles.right_container}>
        <StepInfo />
      </div>
    </div>
  );
};

export default MainContent;
