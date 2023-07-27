import Form from './Form/Form';
import StepInfo from './StepInfo/StepInfo';
import styles from './MainContent.module.scss';

const MainContent = () => (
  <div className={styles.container}>
    <div className={styles.leftContainer}>
      <Form />
    </div>
    <div className={styles.rightContainer}>
      <StepInfo />
    </div>
  </div>
);

export default MainContent;
