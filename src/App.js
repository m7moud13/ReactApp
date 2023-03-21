import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import Lading from './components/Landing';
import Mangmentsection from './components/Mangesction';
import Tips from './components/Tipssection';
import './index.css';

function App() {
  return (
    <div className='bg-[#000300]'>
      <Header />
      <Lading />
      <Mangmentsection />
      <Tips />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
