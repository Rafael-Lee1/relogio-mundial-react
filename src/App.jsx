import React from 'react';
import './App.css';
import RelogioMundial from './RelogioMundial';

function App() {
  return (
    <div className="App">
      <h1>Relógio Mundial</h1>
      <div className="relogios-container">
        <RelogioMundial fusoHorario="America/New_York" cidade="Nova Iorque" />
        <RelogioMundial fusoHorario="Europe/London" cidade="Londres" />
        <RelogioMundial fusoHorario="Asia/Tokyo" cidade="Tóquio" />
      </div>
    </div>
  );
}

export default App;
