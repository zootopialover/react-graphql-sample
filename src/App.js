import React, { useState } from 'react';
import './styles/App.css';
import './styles/Mobile.css';
import BetAmount from "./components/BetAmount";
import List from "./components/List";
import Claws from "./components/Claws";
import Modal from "./components/Modal";
import Slider from "./components/Slider";



function App() {
  const [modalOpenState, setModalOpenState] = useState(false);

  const handleModalOpenState = () => {
    setModalOpenState(!modalOpenState);
  };

  return (
    <div className="app">
      {modalOpenState &&
        <Modal handleModalOpenState={handleModalOpenState}/>
      }
      <header className="header">
          <span className="header-menu-icon"/>
      </header>
      <div  className="content">
        <div className='slider-container'>
          <Slider/>
          <BetAmount/>
        </div>
        <div className='datalist-container'>
          <List/>
        </div>
        <div className='shellfish-container'>
          <Claws handleModalOpenState={handleModalOpenState}/>
        </div>
      </div>
    </div>
  );
}

export default App;
