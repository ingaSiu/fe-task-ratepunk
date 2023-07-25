import styles from './StepInfo.module.scss';

type StepProps = {
  img: string;
  altImg: string;
  count: string;
  title: string;
  info: string;
};

const StepCard = ({ img, altImg, count, title, info }: StepProps) => (
  <div className={styles.step}>
    <div className={styles.img_wrapper}>
      <img src={img} alt={altImg} />
    </div>

    <div className={styles.info_wrapper}>
      <div className={styles.count}>{count}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.info}>{info}</div>
    </div>
  </div>
);

export default StepCard;
