import Header from './Header';
import About from './About';
import Beskid from './Beskid';
import WestTown from './WestTown';
import Footer from './Footer';
import './style.scss'


function App() {

  return (
    <>
      <Header />
      <About />

      <section className='complexes'>
        <div className='wrapper'>
          <h2 className='complexes__title'>Наші комплекси</h2>
          <div className='complexes__items'>
            <Beskid />
            <WestTown />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
