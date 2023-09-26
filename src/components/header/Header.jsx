import Clock from '../clock/Clock';
import IPAddress from '../ipAddress/IPAddress';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <Clock /> \
      <IPAddress />
    </header>
  );
};

export default Header;
