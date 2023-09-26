import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NanoNav.scss';


const NanoNav = () => {
  return (
    <div className="nano-nav">
      <Link to={'https://github.com/soloman-err'} target="_blank">
        <FaGithubSquare className="icon" />
      </Link>
      <Link to={'https://www.linkedin.com/in/soloman-err/'} target="_blank">
        <FaLinkedin className="icon" />
      </Link>
      <Link to={'https://www.facebook.com/soloman.err/'} target="_blank">
        <FaFacebookSquare className="icon" />
      </Link>
    </div>
  );
};

export default NanoNav;
