import { useEffect, useState } from 'react';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navigator from './components/navigator/Navigator';
import Spinner from './components/spinner/Spinner';

const Engine = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return (
    <div className="engine-container">
      <div>
        <Header />
      </div>
      <div className="engine-body">
        <Navigator />
        <div className="engine-core">
          {loading && <Spinner />}
          <About />
          {/* <NanoNav /> */}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Engine;
