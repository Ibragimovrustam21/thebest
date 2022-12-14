import './App.scss';
import { Navbar } from './components';
import { About, Footer, Header, Skills, Testimonials, Works } from './containers'

export const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

