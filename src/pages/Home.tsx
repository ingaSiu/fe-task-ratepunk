import Footer from '../components/Footer/Footer';
import MainContent from '../components/MainContent/MainContent';
import Nav from '../components/Nav/Nav';
import StoreContent from '../components/StoreContent/StoreContent';
import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.container}>
    <Nav />
    <MainContent />
    <StoreContent />
    <Footer />
  </div>
);

export default Home;
