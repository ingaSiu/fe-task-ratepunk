import styles from './StoreContent.module.scss';

type CardProps = {
  link: string;
  name: string;
  text: string;
  storeName: string;
};

const ContentCard = ({ link, name, text, storeName }: CardProps) => {
  return (
    <a href={link} target="_blank">
      <div className={styles.store_container}>
        <img src={name} alt={name} />

        <div>
          <p className={styles.text}>{text}</p>
          <p className={styles.store_name}>{storeName}</p>
        </div>
      </div>
    </a>
  );
};

export default ContentCard;
