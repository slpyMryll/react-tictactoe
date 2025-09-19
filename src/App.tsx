import React from "react";
import "./App.css";
import Header from './components/header';
import Game from './components/Game';

function App() {
  return (
    <div className="bg-[#363062] flex  flex-col justify-center items-center ">
      <Header />
      <Game />
    </div>
  );
}

export default App;