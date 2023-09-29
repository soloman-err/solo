import { useEffect, useState } from 'react';
import './Projects.scss';

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingDots, setLoadingDots] = useState('');
  const [increasing, setIncreasing] = useState(true);

  // LOADING DOTS:
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        if (increasing) {
          setLoadingDots((prevDots) =>
            prevDots.length < 5 ? prevDots + '.' : prevDots
          );
        } else {
          setLoadingDots((prevDots) =>
            prevDots.length > 0 ? prevDots.slice(0, -1) : prevDots
          );
        }

        // Toggle between increasing and decreasing dots
        if (loadingDots.length === 5) {
          setIncreasing(false);
        } else if (loadingDots.length === 0) {
          setIncreasing(true);
        }
      }, 500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isLoading, loadingDots, increasing]);

  return (
    <div className="projects route">
      <h1 className="skull">Projects</h1>

      <div className="projects-container">
        <span className="dots">{loadingDots}</span>
        UPCOMING RELEASE
        <span className="dots">{loadingDots}</span>
      </div>
    </div>
  );
};

export default Projects;
