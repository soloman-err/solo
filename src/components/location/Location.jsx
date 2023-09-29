import { useEffect, useState } from 'react';
import './Location.scss';

const Location = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [loadingDots, setLoadingDots] = useState('');

  // LAT & LON:
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          setLatitude(latitude);
          setLongitude(longitude);
          setIsLoading(false); // Set isLoading to false once data is fetched
        },
        function (geoError) {
          console.error(`Error fetching geolocation: ${geoError.message}`);
          setIsLoading(false); // Set isLoading to false on error
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setIsLoading(false); // Set isLoading to false if geolocation is not supported
    }
  }, []);

  // LOADING DOTS:
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingDots((prevDots) =>
          prevDots.length < 3 ? prevDots + '.' : ''
        );
      }, 500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isLoading]);

  return (
    <div className="location">
      <span>Lat - {isLoading ? loadingDots : latitude}</span>
      <span>Lon - {isLoading ? loadingDots : longitude}</span>
    </div>
  );
};

export default Location;
