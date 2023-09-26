import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigator.scss';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const Navigator = () => {
  const [ activeLink, setActiveLink ] = useState( null );
  const [ displayTexts, setDisplayTexts ] = useState( Array( 3 ).fill( '' ) );
  const [ intervalIds, setIntervalIds ] = useState( Array( 3 ).fill( null ) );
  const [ isMenuOpen, setIsMenuOpen ] = useState( false );

  const onMouseOver = ( e, index ) => {
    let iteration = 0;

    clearInterval( intervalIds[ index ] );

    const newIntervalId = setInterval( () => {
      const newText = e.target.dataset.value
        .split( '' )
        .map( ( letter, idx ) => {
          if ( idx < iteration ) {
            return e.target.dataset.value[ idx ];
          }

          return letters[ Math.floor( Math.random() * 26 ) ];
        } )
        .join( '' );

      setDisplayTexts( ( prevTexts ) => {
        const newTexts = [ ...prevTexts ];
        newTexts[ index ] = newText;
        return newTexts;
      } );

      if ( iteration >= e.target.dataset.value.length ) {
        clearInterval( newIntervalId );
      }

      iteration += 1 / 3;
    }, 30 );

    setIntervalIds( ( prevIds ) => {
      const newIds = [ ...prevIds ];
      newIds[ index ] = newIntervalId;
      return newIds;
    } );
  };

  const onMouseOut = ( index ) => {
    clearInterval( intervalIds[ index ] );
    setDisplayTexts( ( prevTexts ) => {
      const newTexts = [ ...prevTexts ];
      newTexts[ index ] = '';
      return newTexts;
    } );
  };

  useEffect( () => {
    return () => {
      intervalIds.forEach( ( id ) => clearInterval( id ) );
    };
  }, [ intervalIds ] );

  const handleLinkClick = ( index ) => {
    setActiveLink( index );
  };

  // MENU TOGGLER:
  const toggleMenu = () => {
    setIsMenuOpen( !isMenuOpen );
  };

  return (
    <div className="navigator flex flex-row">
      <div
        onClick={toggleMenu}
        className={`burger ${isMenuOpen ? 'open' : ''}`}
        data-menu="1"
      >
        <div className="icon-left"></div>
        <div className="icon-right"></div>
      </div>

      <nav className="text-2xl">
        <ul>
          {['Projects', 'Contact', 'About'].map((text, index) => (
            <li key={index}>
              <Link
                to={`/${text.toLowerCase()}`}
                className={`link ${activeLink === index ? 'active' : ''}`}
                onClick={() => handleLinkClick(index)}
                data-value={text}
                onMouseOver={(e) => onMouseOver(e, index)}
                onMouseOut={() => onMouseOut(index)}
              >
                {displayTexts[index] || text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigator;
