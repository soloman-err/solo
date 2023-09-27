import Clock from '../clock/Clock';
import IPAddress from '../ipAddress/IPAddress';
import Location from '../location/location';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <Location />{' '}
      <div className="star">
        <span>{'*'}</span>
      </div>
      <Clock />{' '}
      <div className="star">
        <span>{'*'}</span>
      </div>
      <IPAddress />
    </header>
  );
};

export default Header;
