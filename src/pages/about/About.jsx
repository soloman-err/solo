import {
  FaDiscord,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './About.scss';

const About = () => {
  return (
    <div className="route">
      <h1>About</h1>
      <section className="about-container">
        <div className="about">
          {/* <Card/> */}
          <img src="/soloico.jpg" alt="" />
          <p>
            <span>
              Being enthusiastic does not mean doing whatever you come across. It
              stems from the inner depths of passion.
            </span>
            <br />
            Allow me to introduce myself as a skilled Full-Stack Web Developer.
            I specialize in developing dynamic interfaces that engage users and
            prioritize responsive design. With expertise in: HTML5 | CSS3 |
            Bootstrap | Tailwind | JavaScript | Node | React 💻
            <br />
            Lets collaborate to bring your vision to life with my seasoned
            skills and unwavering passion for excellence. Together, we can
            create outstanding web solutions that leave a lasting impact.
            Connect with me today!
          </p>

          <div className="social-container">
            <div className="line">{'/'}</div>
            <div className="social">
              <Link to={'https://github.com/soloman-err'} target="_blank">
                <FaGithubSquare size={28} />
              </Link>

              <Link to={'https://twitter.com/soloman_err'} target="_blank">
                <FaTwitterSquare size={28} />
              </Link>

              <Link
                to={'https://discord.com/users/1087367193961955459'}
                target="_blank"
              >
                <FaDiscord size={28} />
              </Link>

              <Link
                to={'https://www.linkedin.com/in/soloman-err/'}
                target="_blank"
              >
                <FaLinkedin size={28} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;