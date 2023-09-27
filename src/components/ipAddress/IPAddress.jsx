import { useEffect, useState } from 'react';
import './IPAddress.scss';

const IPAddress = () => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    fetch('https://api64.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(data.ip);
      })
      .catch((error) => {
        console.error('Error fetching IP address:', error);
      });
  }, []);

  return (
    <div className="ipaddress">
      <span> {ipAddress} IP</span>
    </div>
  );
};

export default IPAddress;
