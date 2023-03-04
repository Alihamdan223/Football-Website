import './App.css';
import React, {useState} from 'react';
import NavBar from "./NavBar";
import Header from "./Header";
import Squad_Data from "./Squad_Data";
import SquadInfo from "./SquadInfo";

function App() {

  const [squad, setSquad] = useState(Squad_Data);

  /* function toggle() {
    setToggleIt(prevToggle => !prevToggle); 
  } */ 

  return (
    <div className="App">
      <NavBar />  
      <Header />
      <SquadInfo squad={squad} setSquad={setSquad} />
    </div>
  );
}

export default App;
