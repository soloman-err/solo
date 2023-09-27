import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
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
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Engine;
