import '../style/ExchangeRate.css';

const ExchangeRate = () => {
  return (
    <div className="exchange-rate">
      <div>
        <span className="title">EUR/USD</span>
        <span className="light"> Updated live</span>
      </div>

      <div className="rate-container">
        <span className="rate-text">0</span>
        <span className="rate-currency"> USD</span>
      </div>
    </div>
  );
};

export default ExchangeRate;
