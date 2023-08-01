import LeftSection from './LeftSection/LeftSection';
import StepInfo from './StepInfo/StepInfo';
import styles from './MainContent.module.scss';

const MainContent = () => (
  <div className={styles.container}>
    <div className={styles.leftContainer}>
      <LeftSection />
    </div>
    <div className={styles.rightContainer}>
      <StepInfo />
    </div>
  </div>
);

export default MainContent;
