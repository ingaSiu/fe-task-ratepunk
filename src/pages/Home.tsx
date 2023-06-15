import Footer from '../components/Footer/Footer';
import MainContent from '../components/MainContent/MainContent';
import Nav from '../components/Nav/Nav';
import StoreContent from '../components/StoreContent/StoreContent';

const Home = () => {
  return (
    <div>
      <Nav />
      <MainContent />
      <StoreContent />
      <Footer />
    </div>
  );
};

export default Home;
