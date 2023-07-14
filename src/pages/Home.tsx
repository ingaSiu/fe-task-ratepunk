import Footer from '../components/Footer/Footer';
import MainContent from '../components/MainContent/MainContent';
import Nav from '../components/Nav/Nav';
import StoreContent from '../components/StoreContent/StoreContent';

// TODO
// visi komponentu konteinerauiai max-width 60proc tada gal pavyks islygiuoti
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
