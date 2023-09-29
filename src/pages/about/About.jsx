import './About.scss';

const About = () => {
  return (
    <div className="route">
      <h1 className="skull">About</h1>

      <section className="about-container">
        <div className="about">
          <img src="/soloico.jpg" alt="" />
          <p>
            <span>
              Being enthusiastic does not mean doing whatever you come across.
              It stems from the inner depths of passion.
            </span>
            <br />
            Allow me to introduce myself as a experienced Full-Stack Web
            Developer skilled in JavaScript, React, Redux, Node, Express, Mongo,
            Sass, Bootstrap, Tailwind, Firebase, Github. Passionate about
            creating engaging and responsive web interfaces.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
