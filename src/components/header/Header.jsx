import { FaPowerOff } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Clock from '../clock/Clock';
import IPAddress from '../ipAddress/IPAddress';
import './Header.scss';

const Header = () => {
  return (
    <header className=''>
      {/* <Location /> */}
      <Link to={'/'}>
        <FaPowerOff size={20} />
      </Link>
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
