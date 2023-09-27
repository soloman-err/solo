import { useEffect, useState } from 'react';
import './Location.scss';

const Location = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        setLatitude(latitude);
        setLongitude(longitude);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);
  return (
    <div className="location">
      <span>Latitude- {latitude}</span>
      <span>Longitude- {longitude}</span>
    </div>
  );
};

export default Location;
