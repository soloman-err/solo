import {
  FaDiscord,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="route">
      <h1 className='skull'>Contact</h1>

      {/* CONTACT-INFO */}
      <div className="container">
        <div className="social-container">
          <div className="social">
            <a
              href="https://github.com/soloman-err"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare />
            </a>

            <a
              href="https://twitter.com/soloman_err"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitterSquare />
            </a>

            <a
              href="https://discord.com/users/1087367193961955459"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </a>

            <a
              href="https://www.linkedin.com/in/soloman-err/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
