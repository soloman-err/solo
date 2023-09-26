import { useEffect, useState } from 'react';
import './Clock.scss';

const Clock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const showTime = () => {
      const date = new Date();
      let h = date.getHours(); // 0 - 23
      let m = date.getMinutes(); // 0 - 59
      let s = date.getSeconds(); // 0 - 59
      let session = 'AM';

      if (h === 0) {
        h = 12;
      }

      if (h > 12) {
        h = h - 12;
        session = 'PM';
      }

      h = h < 10 ? '0' + h : h;
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;

      const currentTime = `${h}:${m}:${s} ${session}`;
      setTime(currentTime);
    };

    const timer = setInterval(showTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return <div className="clock">{time}</div>;
};

export default Clock;
