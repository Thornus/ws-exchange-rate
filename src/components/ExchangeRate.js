import { useEffect, useState } from 'react';
import '../style/ExchangeRate.css';

const ExchangeRate = () => {
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    if(!rate) {
      const socket = new WebSocket('ws://stream.tradingeconomics.com/?client=guest:guest');
      const socketSendData = {"topic": "subscribe", "to": "EURUSD:CUR"};

      socket.addEventListener('open', () => {
        socket.send(JSON.stringify(socketSendData));
      });
    
      socket.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
    
        if(data.price) {
          setRate(data.price);
        }

        if(data.dt) {
          let date = new Date(data.dt);
          const offset = date.getTimezoneOffset();
          date.setMinutes(date.getMinutes() - offset);

          setTime(date.toString());
        }
      });
    }
  }, []);

  return (
    <div className="exchange-rate">
      <div>
        <span className="title">EUR/USD</span>
        <span className="light"> Updated live</span>
      </div>

      <div className="rate-container">
        <span className="rate-text">{rate || 'Loading rate' }</span>
        <span className="rate-currency"> {rate ? 'USD' : ''}</span>
        <br/>
        <span className="rate-time">{time}</span>
      </div>
    </div>
  );
};

export default ExchangeRate;
