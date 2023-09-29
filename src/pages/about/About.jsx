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
        </div>
      </section>
    </div>
  );
};

export default About;
