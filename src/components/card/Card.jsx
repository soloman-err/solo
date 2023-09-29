import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Card.scss';

const cardData = [
  {
    id: 1,
    to: 'https://cyco-inc.netlify.app/',
    imgUrl: '/cyco.png',
    title: 'CYCO - Streaming Platform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    to: 'https://alphabetor.netlify.app/',
    imgUrl: '/alphabetor.png',
    title: 'Alphabetor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    to: 'https://brmmm.netlify.app/',
    imgUrl: '/brmmm.png',
    title: 'Brmmm',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 4,
    to: 'https://soloby.netlify.app/',
    imgUrl: '/soloby.png',
    title: 'Soloby',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Card = () => {
  return (
    <div className="card-container">
      {cardData.map((card) => (
        <div className="card" key={card?.id}>
          <img className="card-image" src={card?.imgUrl} alt="Card" />
          <div className="card-content">
            <div className="card-title">{card?.title}</div>
            <Link to={card?.to} target="_blank">
              <button>
                <span>
                  Visit Site
                  <FaArrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
