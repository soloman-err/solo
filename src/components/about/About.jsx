import { useEffect, useState } from 'react';
import './About.scss';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const About = () => {
  const [displayText, setDisplayText] = useState('');
  const intervalId = useState(null);
  // const [scrollPosition, setScrollPosition] = useState(0);

  const onMouseOver = (e) => {
    clearInterval(intervalId);
    let iteration = 0;

    const newIntervalId = setInterval(() => {
      const newText = e.target.dataset.value
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return e.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');

      setDisplayText(newText);

      if (iteration >= e.target.dataset.value.length) {
        clearInterval(newIntervalId);
        setDisplayText(e.target.dataset.value);
      }

      iteration += 1;
    }, 30);
  };

  const onMouseOut = () => {
    setDisplayText('');
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Download Resume:
  const downloadResume = () => {
    const fileUrl =
      'https://drive.google.com/file/d/1LXTfQ3Q100I9-WIQ8A4TugkQYwpRm500/view?usp=sharing';

    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = "Soloman's-resume.pdf";
    
    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  // Parallax:
  // const handleScroll = () => {
  //   setScrollPosition(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const parallaxStyle = (factor) => ({
  //   transform: `translate3d(0, ${-scrollPosition * factor}px, 0)`,
  // });

  return (
    <section className="about">
      <div className="img">
        {/* <img className="glitch" src="/solo-qr.png" alt="" /> */}
      </div>

      <div className="info">
        {/* <div className="wrapper">
          <span className="scroll-text">
            <span className="fl y3" style={parallaxStyle(0.3)}>
              Y
            </span>
            <span className="fl y1" style={parallaxStyle(0.15)}>
              o
            </span>
            <span className="fl y4" style={parallaxStyle(0.4)}>
              u&nbsp;
            </span>
            <span className="fl y2" style={parallaxStyle(0.25)}>
              a
            </span>
            <span className="fl y4" style={parallaxStyle(0.4)}>
              r
            </span>
            <span className="fl y3" style={parallaxStyle(0.3)}>
              e
            </span>
            <span className="fl y5" style={parallaxStyle(0.5)}>
              &nbsp;
            </span>
            <span className="fl y2" style={parallaxStyle(0.25)}>
              o
            </span>
            <span className="fl y4" style={parallaxStyle(0.4)}>
              b
            </span>
            <span className="fl y6" style={parallaxStyle(0.6)}>
              s
            </span>
            <span className="fl y1" style={parallaxStyle(0.15)}>
              e
            </span>
            <span className="fl y4" style={parallaxStyle(0.4)}>
              r
            </span>
            <span className="fl y2" style={parallaxStyle(0.25)}>
              v
            </span>
            <span className="fl y5" style={parallaxStyle(0.5)}>
              i
            </span>
            <span className="fl y2" style={parallaxStyle(0.25)}>
              n
            </span>
            <span className="fl y3" style={parallaxStyle(0.3)}>
              g
            </span>
            <span className="fl y4" style={parallaxStyle(0.4)}>
              &nbsp;
            </span>
            <span className="fl y6" style={parallaxStyle(0.6)}>
              t
            </span>
            <span className="fl y1" style={parallaxStyle(0.15)}>
              h
            </span>
            <span className="fl y4" style={parallaxStyle(0.4)}>
              e&nbsp;
            </span>
            <span className="fl y2" style={parallaxStyle(0.25)}>
              d
            </span>
            <span className="fl y5" style={parallaxStyle(0.5)}>
              i
            </span>
            <span className="fl y2" style={parallaxStyle(0.25)}>
              s
            </span>
            <span className="fl y3" style={parallaxStyle(0.3)}>
              c
            </span>
            <span className="fl y5" style={parallaxStyle(0.5)}>
              l
            </span>
            <span className="fl y2" style={parallaxStyle(0.25)}>
              o
            </span>
            <span className="fl y3" style={parallaxStyle(0.3)}>
              s
            </span>
            <span className="fl y1" style={parallaxStyle(0.15)}>
              u
            </span>
            <span className="fl y4" style={parallaxStyle(0.4)}>
              r
            </span>
            <span className="fl y2" style={parallaxStyle(0.25)}>
              e
            </span>
            <span className="fl y5" style={parallaxStyle(0.5)}>
              &nbsp;
            </span>
            <span className="fl y2" style={parallaxStyle(0.25)}>
              o
            </span>
            <span className="fl y4" style={parallaxStyle(0.4)}>
              f&nbsp;
            </span>
            <span className="fl y3" style={parallaxStyle(0.3)}>
              S
            </span>
            <span className="fl y6" style={parallaxStyle(0.6)}>
              o
            </span>
            <span className="fl y1" style={parallaxStyle(0.15)}>
              l
            </span>
            <span className="fl y4" style={parallaxStyle(0.4)}>
              o
            </span>
            <span className="fl y2" style={parallaxStyle(0.25)}>
              m
            </span>
            <span className="fl y5" style={parallaxStyle(0.5)}>
              a
            </span>
            <span className="fl y2" style={parallaxStyle(0.25)}>
              n
            </span>
          </span>
          <p>scroll down</p>
        </div> */}

        {/* <div className="bio">
          <span>
            <button
              className="btn"
              data-value="Download Resume"
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
              onClick={downloadResume}
            >
              <FaFileDownload className="dwn-ico" />{' '}
              {displayText || 'Download Resume'}
            </button>
          </span>
        </div>
        <span className="sub-text">
          Im a <span className="highlight">Full-stack web developer</span>. Im
          passionate about learning new aspects of...
        </span> */}
      </div>
    </section>
  );
};

export default About;
