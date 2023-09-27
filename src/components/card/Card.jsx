import { useState } from 'react';
import './Card.scss';

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <figure
      id="card-1"
      className={isHovered ? 'hovered' : ''}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <img src="https://i.imgur.com/ihZ6qn6.png" alt="placeholder" />
      <figcaption>
        The Fool is everyone - including you and me. Each step he takes on his
        journey feels like stepping into a brave new world. Ultimately, the
        journey will change him. But as the card shows, he is a trustworthy lad
        whose tireless hope drives him toward his goal.
      </figcaption>
      <div className="decor" aria-hidden="true"></div>
    </figure>
  );
};

export default Card;

// {
//   num: '0',
//   title: 'The Fool',
//   url: 'https://i.imgur.com/ihZ6qn6.png',
//   description:
//     "The Fool is everyone - including you and me. Each step he takes on his journey feels like stepping into a brave new world. Ultimately, the journey will change him. But as the card shows, he's a trustworthy lad whose tireless hope drives him toward his goal.",
// },
