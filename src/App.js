import './style/App.css';
import { useState } from 'react';
import Login from './components/Login';
import Modal from './components/Modal';
import ExchangeRate from './components/ExchangeRate';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">

      <div className="flex-container">
        <Login onResetPasswordClick={() => {setShowModal(true);}}/>
        <ExchangeRate/>
      </div>

      {showModal && <Modal/>}

      <div className="vimeo-wrapper">
        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
          <source src="https://public.ortex.com/wp-content/uploads/2020/09/iStock-1002667230-1.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  );
};

export default App;
