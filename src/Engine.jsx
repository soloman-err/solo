import { useEffect, useState } from 'react';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navigator from './components/navigator/Navigator';
import NanoNav from './components/navigator/nanoNav/NanoNav';
import Spinner from './components/spinner/Spinner';

const Engine = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return (
    <div
      className="engine"
    >
      <Header/>
      <Navigator />
      {loading && <Spinner />}
      <About />
      <NanoNav />
      <Footer/>
    </div>
  );
};

export default Engine;
