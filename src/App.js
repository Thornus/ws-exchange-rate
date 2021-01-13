import './style/App.css';
import Login from './components/Login';
import ExchangeRate from './components/ExchangeRate';

const App = () => {
  return (
    <div className="app">

      <div className="flex-container">
        <Login/>
        <ExchangeRate/>
      </div>


      <div className="vimeo-wrapper">
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="https://public.ortex.com/wp-content/uploads/2020/09/iStock-1002667230-1.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  );
};

export default App;
