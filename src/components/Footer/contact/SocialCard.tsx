import styles from './Contact.module.scss';

type SocialProps = {
  src: string;
  alt: string;
};

const SocialCard = ({ src, alt }: SocialProps) => {
  return (
    <div className={styles.img_wrapper}>
      <a href="#">
        <img src={src} alt={alt} />
      </a>
    </div>
  );
};

export default SocialCard;
